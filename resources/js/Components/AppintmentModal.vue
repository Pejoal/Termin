<script setup>
import { computed, watch, ref } from "vue";
import AppintmentForm from "./AppintmentForm.vue";

let projectModal = ref(false);

// Stop Scrolling When The Modal is Opened
const isModalOpen = computed(() => projectModal.value);
watch(isModalOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.toggle("overflow-y-hidden");
  } else {
    document.body.classList.toggle("overflow-y-hidden");
  }
});
const save = () => {
  projectModal.value = false;
};
</script>

<template>
  <AppintmentForm v-on:save="save" />
</template>
