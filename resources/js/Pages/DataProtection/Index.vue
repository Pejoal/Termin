<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans("words.home") }}</title>
  </Head>
  <GuestLayout>
    {{ trans("words.welcome") }}
  </GuestLayout>
</template>
