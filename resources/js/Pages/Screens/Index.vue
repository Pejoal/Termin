<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";
import axios from "axios";

const props = defineProps({
  screens: {
    type: Array,
    default: [],
  },
});
const page = usePage().props;

const save_home = () => {
  axios.post(route("home.store"), {
    content: CKEDITOR.instances.home.getData(),
  });
};

const save_imprint = () => {
  axios.post(route("imprint.store"), {
    content: CKEDITOR.instances.imprint.getData(),
  });
};

const save_data_protection = () => {
  axios.post(route("data-protection.store"), {
    content: CKEDITOR.instances.data_protection.getData(),
  });
};

$(document).ready(function () {
  CKEDITOR.replace("home", {
    language: page.active_locale_code,
    uiColor: "#eeeeee",
  });
  CKEDITOR.replace("imprint", {
    language: page.active_locale_code,
    uiColor: "#eeeeee",
  });
  CKEDITOR.replace("data_protection", {
    language: page.active_locale_code,
    uiColor: "#eeeeee",
  });
});
</script>

<template>
  <Head :title="trans('words.screens')" />

  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        <header class="flex items-center justify-center">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            {{ trans("words.screens") }}
          </h2>
        </header>
        <main class="space-y-2 rounded-lg">
          <section class="py-2 border-b border-black">
            <h3 class="text-2xl">{{ trans("words.home") }}</h3>
            <textarea name="home" id="home">
              {{ screens[0].content }}
            </textarea>
            <button @click="save_home" class="btn btn-primary my-2">
              {{ trans("words.save") }}
            </button>
          </section>
          <section class="py-2 border-b border-black">
            <h3 class="text-2xl">{{ trans("words.imprint") }}</h3>
            <textarea name="imprint" id="imprint">
              {{ screens[1].content }}
            </textarea>
            <button @click="save_imprint" class="btn btn-primary my-2">
              {{ trans("words.save") }}
            </button>
          </section>
          <section class="py-2 border-b border-black">
            <h3 class="text-2xl">{{ trans("words.data_protection") }}</h3>
            <textarea name="data_protection" id="data_protection">
              {{ screens[2].content }}
            </textarea>
            <button @click="save_data_protection" class="btn btn-primary my-2">
              {{ trans("words.save") }}
            </button>
          </section>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
<style>
.cke_contents {
  height: 50rem !important;
}
</style>
