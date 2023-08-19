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
      <main class="border-l border-white min-h-screen p-4 space-y-2">
        <section class="bg-slate-300 rounded-lg p-2">
          <h3 class="text-center text-lg font-bold">{{ trans('words.text_questions') }}</h3>
          <section class="flex items-center justify-between">
            <p> 99 {{ trans('words.questions') }} </p>
            <button class="btn btn-primary"> {{ trans('words.add_question') }}</button>
          </section>
        </section>
        <section class="bg-slate-300 rounded-lg p-2">
          <h3 class="text-center text-lg font-bold">{{ trans('words.math_questions') }}</h3>
          <section class="flex items-center justify-between">
            <p> 99 {{ trans('words.questions') }} </p>
            <button class="btn btn-primary"> {{ trans('words.add_question') }}</button>
          </section>
        </section>
        <section class="bg-slate-300 rounded-lg p-2">
          <h3 class="text-center text-lg font-bold">{{ trans('words.photo_questions') }}</h3>
          <section class="flex items-center justify-between">
            <p> 99 {{ trans('words.questions') }} </p>
            <button class="btn btn-primary"> {{ trans('words.add_question') }}</button>
          </section>
        </section>
        <section class="bg-slate-300 rounded-lg p-2">
          <h3 class="text-center text-lg font-bold">{{ trans('words.video_questions') }}</h3>
          <section class="flex items-center justify-between">
            <p> 99 {{ trans('words.questions') }} </p>
            <button class="btn btn-primary"> {{ trans('words.add_question') }}</button>
          </section>
        </section>
      </main>
    </template>
  </AuthLayout>
</template>
