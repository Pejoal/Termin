<script setup>
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { Head } from '@inertiajs/vue3';

let props = defineProps({});
</script>

<template>
  <Head title="User" />

  <AuthLayout>
    <template #content> User </template>
  </AuthLayout>
</template>
