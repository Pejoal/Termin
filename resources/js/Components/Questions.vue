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
  type: props.db_type,
});

const showModal = ref(false);
const add_question = () => {
  showModal.value = true;
  // form.post(route("question.store"));
};

const questionText = ref('');
const answers = ref(['', '', '', '']);
const correctAnswerIndex = ref(null);

const saveQuestion = () => {
  if (correctAnswerIndex.value === null) {
    alert('Please select the correct answer.');
    return;
  }

  const question = {
    questionText: questionText.value,
    answers: answers.value,
    correctAnswerIndex: correctAnswerIndex.value,
  };

  // Send the question to the Laravel backend using Inertia
  // You can use `emit()` to send an event to the parent component for redirection.
  // For example, `emit('question-saved', question);`
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
          <div>
            <h2>Create a Question</h2>
            <form @submit.prevent="saveQuestion">
              <div class="form-group">
                <label for="question">Question:</label>
                <input
                  type="text"
                  id="question"
                  v-model="questionText"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group">
                <label>Answers:</label>
                <div
                  v-for="(answer, index) in answers"
                  :key="index"
                  class="form-check"
                >
                  <input
                    type="radio"
                    :id="'answer' + index"
                    :value="index"
                    v-model="correctAnswerIndex"
                    class="form-check-input"
                  />
                  <label :for="'answer' + index" class="form-check-label">
                    <input
                      type="text"
                      v-model="answers[index]"
                      class="form-control"
                      required
                    />
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Save Question
              </button>
            </form>
          </div>
        </template>
      </ResuableModal>
    </Teleport>
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
