<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <AdminLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen flex items-start p-4">
        Hi
      </section>
    </template>
  </AdminLayout>
</template>
