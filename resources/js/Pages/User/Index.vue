<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";

let props = defineProps({});
</script>

<template>
  <Head title="User" />

  <AuthLayout>
    <template #content>
      <section class="border-l border-white h-screen flex items-start p-4">
        User Info
      </section>
    </template>
  </AuthLayout>
</template>
