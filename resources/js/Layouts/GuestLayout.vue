<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Locales from "@/Components/Locales.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header
      class="flex items-center justify-between h-20 bg-zinc-400 py-2 px-4 sm:px-6 lg:px-8"
    >
      <Link class="font-bold text-xl" :href="route('home')">
        {{ trans("words.my_drive_school") }}
      </Link>
      <Locales :horizontal="true" />
    </header>
    <div class="grid place-items-center">
      <slot />
    </div>
  </div>
</template>
