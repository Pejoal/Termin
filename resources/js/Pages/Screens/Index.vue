<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from "vue";

const imprint = ClassicEditor;
const imprintData = ref("<p>Imprint.</p>");
const dataProtection = ClassicEditor;
const dataProtectionData = ref("<p>Data Protection.</p>");
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
          <section>
            <h3 class="text-2xl">{{ trans("words.imprint") }}</h3>
            <ckeditor
              :editor="imprint"
              v-model="imprintData"
              :config="editorConfig"
            ></ckeditor>
          </section>
          <section>
            <h3 class="text-2xl">{{ trans("words.data_protection") }}</h3>
            <ckeditor
              :editor="dataProtection"
              v-model="dataProtectionData"
              :config="editorConfig"
            ></ckeditor>
          </section>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
<style>
.ck-content {
  height: 50rem;
}
</style>
