<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans("words.home") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white min-h-screen p-4">
        {{ trans("words.welcome") }}
      </section>
    </template>
  </AuthLayout>
</template>
