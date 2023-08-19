<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans('words.quiz') }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white min-h-screen p-4">
        {{ trans('words.quiz') }} Client
      </section>
    </template>
  </AuthLayout>
</template>
