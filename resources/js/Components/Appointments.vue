<script setup>
import { ref } from "vue";
import ResuableModal from "./ResuableModal.vue";
import AppintmentModal from "./AppintmentModal.vue";

const props = defineProps({
  date: {
    type: Object,
    required: true,
    default: {},
  },
});

let showModal = ref(false);
</script>
<template>
  <Teleport to="#modal">
    <ResuableModal
      :classes="['w-[90%] md:w-[85%] lg:w-[80%] h-[60%]']"
      :header="'Termin aktualisieren'"
      :show="showModal"
      @close="showModal = false"
    >
      <template #content>
        <AppintmentModal :date="date" v-on:save="showModal = false" />
      </template>
    </ResuableModal>
  </Teleport>
  <section
    class="flex items-center justify-between my-2 bg-white p-2 rounded-lg"
    @click="showModal = true"
  >
    <p>{{ props.date.date }} Um {{ props.date.time }}</p>
    <section v-if="props.date.status == 'pending'" class="btn btn-info">
      ausstehend
    </section>
    <section
      v-else-if="props.date.status == 'approved'"
      class="btn btn-success"
    >
      akzeptiert
    </section>
    <section
      v-else-if="props.date.status == 'cancelled'"
      class="btn btn-warning"
    >
      abgesagt
    </section>
    <section v-else-if="props.date.status == 'declined'" class="btn btn-danger">
      abgelehnt
    </section>
  </section>
</template>
