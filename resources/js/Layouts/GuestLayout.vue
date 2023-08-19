<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header
      class="flex items-center justify-center h-20 bg-zinc-400 py-2 px-4 sm:px-6 lg:px-8"
    >
      <Link class="font-bold text-xl" :href="route('home')">
        {{ trans("words.my_drive_school") }}
      </Link>
    </header>
    <div class="grid place-items-center">
      <slot />
    </div>
  </div>
</template>
