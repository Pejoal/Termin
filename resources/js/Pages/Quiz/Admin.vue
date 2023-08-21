<script setup>
import Questions from "./Partials/Questions.vue";
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
      <main class="p-4 space-y-2">
        <Questions :type="'text'" />
        <Questions :type="'math'" />
        <Questions :type="'photo'" />
        <Questions :type="'video'" />
      </main>
    </template>
  </AuthLayout>
</template>
