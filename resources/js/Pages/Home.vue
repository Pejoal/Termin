<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans("words.home") }}</title>
  </Head>
  <GuestLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        {{ trans("words.welcome") }}
      </section>
    </template>
  </GuestLayout>
</template>
