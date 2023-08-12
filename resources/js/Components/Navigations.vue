<script setup>
import { Link, usePage } from "@inertiajs/vue3";
const user = usePage().props.auth.user;

const props = defineProps({
  horizontal: {
    tpye: Boolean,
    default: false,
  },
  vertical: {
    tpye: Boolean,
    default: false,
  },
  dark: {
    tpye: Boolean,
    default: false,
  },
});
</script>
<template>
  <nav
    :class="{
      'hidden md:flex items-center justify-center gap-2': props.horizontal,
      'flex flex-col space-y-2 px-4': props.vertical,
    }"
  >
    <Link
      :href="route('home')"
      class="text-gray-100 hover:text-white hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline text-white font-bold':
          route().current('home') || route().current('home'),
      }"
    >
      Home
    </Link>

    <!-- Navigations For Small Pages -->
    <Link
      :href="route('profile.edit')"
      class="text-gray-100 hover:text-white hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline text-white font-bold': route().current('profile.edit'),
      }"
    >
      Settings
    </Link>
    <Link
      :href="route('user.profile.me')"
      class="text-gray-100 hover:text-white hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline text-white font-bold': route().current('user.profile.me'),
      }"
    >
      My Profile
    </Link>
  </nav>
</template>
