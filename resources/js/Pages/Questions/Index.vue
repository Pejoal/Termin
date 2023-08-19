<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import ResuableModal from "@/Components/ResuableModal.vue";
import Toast from "@/Components/Toast.vue";
import axios from "axios";
import { ref } from "vue";

const props = defineProps({
  type: String,
  questions: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const showModal = ref(false);
let showToast = ref(false);

const form = useForm({
  id: 0,
  content: "",
  correctAnswerIndex: null,
  answers: ["", "", "", ""],
  type: props.type,
});

const edit = (id) => {
  axios.post(route("question.edit", id)).then((response) => {
    showModal.value = true;
    form.id = response.data.id;
    form.content = response.data.content;
    form.correctAnswerIndex = response.data.correct_answer;

    // form.post(route("question.store"), {
    //   onSuccess: () => {
    //     showToast.value = true;
    //     showModal.value = false;
    //   },
    // });
  });
};

const destroy = (id) => {
  form.delete(route("question.destroy", id));
};
</script>

<template>
  <Head>
    <title>{{ trans("words.questions") }}</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <Teleport to="#toasts">
        <Toast
          :show="showToast"
          :type="'success'"
          @close="showToast = false"
          :message="trans('words.question_updated')"
        />
      </Teleport>
      <Teleport to="#modal">
        <ResuableModal
          :classes="['w-[90%] md:w-[85%] lg:w-[80%] h-[60%]']"
          :header="trans('words.update_question')"
          :show="showModal"
          @close="showModal = false"
        >
          <template #content>
            <h3 class="w-full text-center font-bold text-xl">
              {{ trans(`words.${type}_questions`) }}
            </h3>
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
              <p v-if="form.errors.content" class="error">
                {{ form.errors.content }}
              </p>
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
              <p v-if="form.errors.answers" class="error">
                {{ form.errors.answers }}
              </p>
              <button type="submit" class="btn btn-primary mx-auto">
                {{ trans("words.update_question") }}
              </button>
            </form>
          </template>
        </ResuableModal>
      </Teleport>
      <section
        class="flex items-center justify-between p-4 my-2 rounded-lg bg-slate-300"
        v-for="question in questions"
        :key="question.id"
      >
        <p>{{ trans("words.question") }}: {{ question.content }}</p>
        <section class="flex gap-2 items-center">
          <button class="btn btn-primary" @click="edit(question.id)">
            {{ trans("words.edit") }}
          </button>
          <button class="btn btn-danger" @click="destroy(question.id)">
            {{ trans("words.delete") }}
          </button>
        </section>
      </section>
    </template>
  </AuthLayout>
</template>
