<script setup>
import { ref } from "vue";

const props = defineProps({
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
  <section class="p-4">
    <div v-if="currentIndex < questions.length">
      <h3 class="text-lg font-semibold">Question {{ currentIndex + 1 }}</h3>
      <p>{{ questions[currentIndex].content }}</p>
      <ul>
        <li v-for="answer in questions[currentIndex].answers" :key="answer.id">
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
    </div>
    <div v-else>
      <p>Congratulations! You've answered all questions.</p>
    </div>
  </section>
</template>
