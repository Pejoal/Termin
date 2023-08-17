<script setup>
import { ref } from "vue";
import ResuableModal from "./ResuableModal.vue";
import { useForm } from "@inertiajs/vue3";
import AppintmentModal from "./AppintmentModal.vue";

const props = defineProps({
  date: {
    type: Object,
    required: true,
    default: {},
  },
});

const form = useForm({
  s: "s",
});

let showModal = ref(false);

</script>
<template>
  <Teleport to="#modal">
    <ResuableModal
      :classes="['w-[90%] md:w-[85%] lg:w-[80%] h-[90%]']"
      :header="'Update Appointment'"
      :show="showModal"
      @close="showModal = false"
    >
      <template #content>
        <AppintmentModal />
      </template>
    </ResuableModal>
  </Teleport>
  <section
    class="flex items-center justify-between my-2 bg-white p-2 rounded-lg"
    @click="showModal = true"
  >
    <p>At: {{ props.date.date }} {{ props.date.time }}</p>
    <section v-if="props.date.status == 'pending'" class="btn btn-info">
      {{ props.date.status }}
    </section>
    <section
      v-else-if="props.date.status == 'approved'"
      class="btn btn-success"
    >
      {{ props.date.status }}
    </section>
    <section
      v-else-if="props.date.status == 'canceled'"
      class="btn btn-warning"
    >
      {{ props.date.status }}
    </section>
    <section v-else-if="props.date.status == 'declined'" class="btn btn-danger">
      {{ props.date.status }}
    </section>
  </section>
</template>
