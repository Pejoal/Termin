<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen p-4">
        Hi
      </section>
    </template>
  </AuthLayout>
</template>
