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
    <template
      v-if="['admin', 'super admin'].includes($page.props.auth.user.type)"
    >
      <Link
        :href="route('admin.dashboard')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline font-bold': route().current('admin.dashboard'),
        }"
      >
        Admin Dashboard
      </Link>
    </template>
    <template v-if="$page.props.auth.user.type === 'user'">
      <Link
        :href="route('home')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold':
            route().current('home') || route().current('home'),
        }"
      >
        Home
      </Link>

      <Link
        :href="route('user.profile.me')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('user.profile.me'),
        }"
      >
        My Profile
      </Link>
    </template>
    <Link
      :href="route('profile.edit')"
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('profile.edit'),
      }"
    >
      Settings
    </Link>
  </nav>
</template>
