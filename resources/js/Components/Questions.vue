<script setup>
import { useForm } from "@inertiajs/vue3";
import ResuableModal from "./ResuableModal.vue";
import { ref } from "vue";
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
  correctAnswerIndex: null,
  answers: ["", "", "", ""],
  type: props.db_type,
});

const showModal = ref(false);

const saveQuestion = () => {
  if (form.correctAnswerIndex === null) {
    alert("Please select the correct answer.");
    return;
  }

  // console.log(form.value);
  form.post(route("question.store"));
};
</script>
<template>
  <section class="bg-slate-300 rounded-lg p-2">
    <h3 class="text-center text-lg font-bold mt-2 mb-3">
      {{ trans(`words.${type}`) }}
    </h3>
    <Teleport to="#modal">
      <ResuableModal
        :classes="['w-[90%] md:w-[85%] lg:w-[80%] h-[60%]']"
        :header="trans('words.add_question')"
        :show="showModal"
        @close="showModal = false"
      >
        <template #content>
          <form @submit.prevent="saveQuestion">
            <section class="flex items-center p-2">
              <label for="question" class="w-24"
                >{{ trans("words.question") }}:</label
              >
              <textarea
                id="question"
                v-model="form.content"
                class="flex-1 rounded-md h-24"
                required
              ></textarea>
            </section>
            <section class="p-2">
              <label>{{ trans("words.answers") }}:</label>
              <section
                v-for="(answer, index) in form.answers"
                :key="index"
                class="flex items-center gap-2 p-2"
              >
                <label :for="'answer' + index" class="w-3/4">
                  <input
                    type="text"
                    v-model="form.answers[index]"
                    class="block w-full rounded-md"
                    required
                  />
                </label>
                <input
                  type="radio"
                  :id="'answer' + index"
                  :value="index"
                  v-model="form.correctAnswerIndex"
                />
              </section>
            </section>
            <button type="submit" class="btn btn-primary mx-auto">
              {{ trans("words.add_question") }}
            </button>
          </form>
        </template>
      </ResuableModal>
    </Teleport>
    <section class="flex items-center justify-between">
      <p>{{ questions_count }} {{ trans("words.questions") }}</p>
      <section class="flex gap-2">
        <button class="btn btn-primary">
          {{ trans("words.show_questions") }}
        </button>
        <button class="btn btn-primary" @click="showModal = true">
          {{ trans("words.add_question") }}
        </button>
      </section>
    </section>
  </section>
</template>
