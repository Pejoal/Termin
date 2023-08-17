<script setup>
import Toast from "@/Components/Toast.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const emit = defineEmits(["save"]);

const props = defineProps({
  project: {
    type: Object,
    default: {},
  },
});

let showUpdatedToast = ref(false);

const projectForm = useForm({
  id: props.project?.id ?? 0,
  code: "",
  name: props.project?.name ?? "",
  description: props.project?.description ?? "",
  start_date: props.project?.start_date ?? "",
  end_date: props.project?.end_date ?? "",
  tags: props.project?.tags ?? [],
});

const storeProject = () => {
  projectForm.post(route("project.update", [projectForm.id]), {
    onSuccess: () => {
      emit("save");
      showUpdatedToast.value = true;
    },
  });
};
</script>

<template>

  <Teleport to="#toasts">
    <Toast
      :show="showUpdatedToast"
      :type="'success'"
      @close="showUpdatedToast = false"
      :message="'Project Updated Successfully'"
    />
  </Teleport>
  <form class="mt-10" @submit.prevent="storeProject()">
    <section
      class="flex lg:inline-flex lg:w-1/2 items-center justify-start my-2"
    >
      <label for="name" class="w-36 px-4">Name</label>
      <input
        type="text"
        class="block rounded-lg flex-1 px-2 mx-2 h-10"
        name="name"
        id="name"
        placeholder="Name"
        v-model="projectForm.name"
      />
      <Teleport to="#toasts">
        <Toast
          :show="!!projectForm.errors.name"
          @close="projectForm.errors.name = false"
          :message="projectForm.errors.name"
          :type="'danger'"
        />
      </Teleport>
    </section>
    <section class="flex items-center justify-center">
      <button type="submit" class="btn btn-primary">Save</button>
    </section>
  </form>
</template>
