<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from "vue";

const editor = ClassicEditor;
const editorData = ref("<p>Content of the editor.</p>");
const editorConfig = {};

const props = defineProps({
  // previousAppointments: {
  //   type: Object,
  //   default: {},
  // },
});
</script>

<template>
  <Head :title="trans('words.screens')" />

  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            {{ trans("words.control_screens") }}
          </h2>
        </header>
        <main class="space-y-2 rounded-lg">
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
<style></style>
