<script setup>
import Questions from "@/Components/Questions.vue";
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
        <Questions :type="'text_questions'" :db_type="'text'" />
        <Questions :type="'math_questions'" :db_type="'math'" />
        <Questions :type="'photo_questions'" :db_type="'photo'" />
        <Questions :type="'video_questions'" :db_type="'video'" />
      </main>
    </template>
  </AuthLayout>
</template>
