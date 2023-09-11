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
        <h2>
          {{ trans("words.welcome") }}
        </h2>
      </section>
    </template>
  </GuestLayout>
</template>
