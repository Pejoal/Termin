<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans('words.business_hours') }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white min-h-screen flex items-start p-4">
        {{ trans('words.business_hours') }}
      </section>
    </template>
  </AuthLayout>
</template>
