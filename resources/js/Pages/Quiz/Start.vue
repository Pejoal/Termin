<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";

defineProps({
  questions: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <Head>
    <title>{{ trans("words.quiz") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        
      </section>
    </template>
  </AuthLayout>
</template>
