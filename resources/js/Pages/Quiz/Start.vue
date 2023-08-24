<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  questions: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const userAnswers = ref([]);

const moveToNextQuestion = (selectedAnswerId) => {
  userAnswers.value.push({
    question_id: props.questions[currentIndex.value].id,
    answer_id: selectedAnswerId,
  });
  currentIndex.value++;
  if (currentIndex.value > props.questions.length - 1) {
    submitAnswers(userAnswers.value);
  }
};

const submitAnswers = (answers) => {
  console.log(answers);
};
</script>
<template>
  <Head>
    <title>{{ trans("words.quiz") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        <div v-if="currentIndex < questions.length">
          <h2 class="text-2xl font-bold">
            {{ trans("words.question") }} {{ currentIndex + 1 }}
          </h2>
          <h3 class="text-xl font-semibold p-2">
            {{ questions[currentIndex].content }}
          </h3>
          <ul class="p-2 space-y-2">
            <li
              v-for="answer in questions[currentIndex].answers"
              :key="answer.id"
            >
              <label>
                <input
                  type="radio"
                  :name="'question_' + questions[currentIndex].id"
                  :value="answer.id"
                  @change="moveToNextQuestion(answer.id)"
                />
                {{ answer.content }}
              </label>
            </li>
          </ul>
          <section
            v-if="props.type === 'photo'"
            class="border flex justify-center h-[50vh]"
          >
            <img
              v-if="questions[currentIndex].photo"
              class="max-h-full"
              :src="questions[currentIndex].photo"
              :alt="trans('words.photo')"
            />
          </section>
          <section
            v-if="props.type === 'video'"
            class="flex justify-center h-[50vh]"
          >
            <template v-for="(question, key) in questions">
              <video
                v-if="key == currentIndex"
                class="max-h-full"
                controls
              >
                <source :src="questions[key].video" />
              </video>
            </template>
          </section>
        </div>
        <div v-else class="">
          <p class="btn btn-primary">
            {{ trans("words.congratulations_youve_answered_all_questions") }}
          </p>
        </div>
      </section>
    </template>
  </AuthLayout>
</template>
