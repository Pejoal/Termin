<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
import axios from "axios";
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

const result = ref(0);
const currentIndex = ref(0);
const userAnswers = ref([]);
const selectedAnswerIds = ref({ answer_ids: [], content: "" });

const setSelectedAnswerIds = (selectedAnswerId) => {
  const index = selectedAnswerIds.value.answer_ids.indexOf(selectedAnswerId);
  if (index === -1) {
    selectedAnswerIds.value.answer_ids.push(selectedAnswerId);
  } else {
    selectedAnswerIds.value.answer_ids.splice(index, 1);
  }
};
const moveToNextQuestion = () => {
  // userAnswers.value.push({
  // question_id: props.questions[currentIndex.value].id,
  //   answer_id: selectedAnswerId,
  // });

  userAnswers.value.push(selectedAnswerIds.value);
  selectedAnswerIds.value = { answer_ids: [], content: "" };
  // console.log(userAnswers.value);
  currentIndex.value++;
  if (currentIndex.value > props.questions.length - 1) {
    submitAnswers(userAnswers.value);
  }
};

const submitAnswers = (answers) => {
  axios.post(route("quiz.submitAnswers"), answers).then((response) => {
    result.value = response.data;
  });
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
          <ul
            class="p-2 space-y-2"
            v-if="questions[currentIndex].type !== 'math'"
          >
            <li
              v-for="answer in questions[currentIndex].answers"
              :key="answer.id"
            >
              <label>
                <input
                  type="checkbox"
                  :name="'question_' + questions[currentIndex].id"
                  :value="answer.id"
                  @change="setSelectedAnswerIds(answer.id)"
                />
                {{ answer.content }}
              </label>
            </li>
          </ul>
          <section v-else class="p-2">
            <!-- <label>{{ trans('words.answer') }}</label> -->
            <!-- <input type="number"  @change="setSelectedAnswerIds(answer.id, questions[currentIndex].type)"  /> -->
            <input type="number" v-model="selectedAnswerIds.content" />
          </section>
          <button @click="moveToNextQuestion" class="btn btn-primary">
            {{ trans("words.confirm") }}
          </button>
          <section
            v-if="
              (props.type === 'photo' || props.type === 'test') &&
              questions[currentIndex].photo
            "
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
            v-if="
              (props.type === 'video' || props.type === 'test') &&
              questions[currentIndex].video
            "
            class="flex justify-center h-[50vh]"
          >
            <template v-for="(question, key) in questions">
              <video v-if="key == currentIndex" class="max-w-full" controls>
                <source :src="questions[key].video" />
              </video>
            </template>
          </section>
        </div>
        <div v-else class="flex items-center justify-center flex-col">
          <h2 class="text-2xl font-bold">
            {{ result }} / {{ questions.length }}
          </h2>
          <p class="btn btn-primary">
            {{ trans("words.congratulations_youve_answered_all_questions") }}
          </p>
        </div>
      </section>
    </template>
  </AuthLayout>
</template>
