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
  if (currentIndex.value < props.questions.length - 1) {
    currentIndex.value++;
  } else {
    // All questions answered, send userAnswers to the server
    submitAnswers(userAnswers.value);
  }
};

const submitAnswers = (answers) => {
  // Here, you can make an API request to send userAnswers to the server
  console.log(answers);
};
</script>
<template>
  <!-- ... (previous code) -->
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
