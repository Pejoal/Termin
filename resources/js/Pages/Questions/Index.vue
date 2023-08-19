<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
const props = defineProps({
  questions: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <Head>
    <title>{{ trans("words.questions") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="flex items-center justify-between p-4 my-2 rounded-lg bg-slate-300" v-for="question in questions">
        <p>{{ trans('words.question') }}: {{ question.content }}</p>
        <section class="flex gap-2 items-center">
          <button class="btn btn-primary">{{ trans('words.edit') }}</button>
          <button class="btn btn-danger">{{ trans('words.delete') }}</button>
        </section>
      </section>
    </template>
  </AuthLayout>
</template>
