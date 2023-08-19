<script setup>
import { useForm } from "@inertiajs/vue3";
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  db_type: {
    type: String,
    required: true,
  },
  questions_count: {
    type: Number,
    default: 999,
  },
});

const form = useForm({
  content: "",
  type: props.db_type,
});

const add_question = () => {
  form.post(route("question.store"));
};
</script>
<template>
  <section class="bg-slate-300 rounded-lg p-2">
    <h3 class="text-center text-lg font-bold mt-2 mb-3">
      {{ trans(`words.${type}`) }}
    </h3>
    <section class="flex items-center justify-between">
      <p>{{ questions_count }} {{ trans("words.questions") }}</p>
      <section class="flex gap-2">
        <button class="btn btn-primary">
          {{ trans("words.show_questions") }}
        </button>
        <button class="btn btn-primary" @click="add_question">
          {{ trans("words.add_question") }}
        </button>
      </section>
    </section>
  </section>
</template>
