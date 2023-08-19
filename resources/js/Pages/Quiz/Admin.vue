<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
  <Head>
    <title>{{ trans("words.quiz") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <main class="border-l border-white min-h-screen p-4">
        <section class="bg-slate-300 rounded-lg p-2">
          <h3 class="text-center text-lg font-bold">{{ trans('words.text_question') }}</h3>
          <section></section>
        </section>
      </main>
    </template>
  </AuthLayout>
</template>
