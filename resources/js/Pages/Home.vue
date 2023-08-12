<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="flex items-center justify-between px-4 md:px-0 pt-6 pb-4">
        Hi
      </section>
    </template>
  </AuthLayout>
</template>
