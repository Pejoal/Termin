<script setup>
import { Link } from "@inertiajs/vue3";

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
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('home'),
      }"
    >
      {{ trans("words.home") }}
    </Link>
    <Link
      :href="route('imprint')"
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('imprint'),
      }"
    >
      {{ trans("words.imprint") }}
    </Link>
    <Link
      :href="route('data-protection')"
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('data-protection'),
      }"
    >
      {{ trans("words.data_protection") }}
    </Link>
    <template
      v-if="['admin', 'super admin'].includes($page.props.auth?.user?.type)"
    >
      <Link
        :href="route('admin.dashboard')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline font-bold': route().current('admin.dashboard'),
        }"
      >
        {{ trans("words.admin_dashboard") }}
      </Link>
      <Link
        :href="route('quiz.admin')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('quiz.admin'),
        }"
      >
        {{ trans("words.quiz") }}
      </Link>
      <Link
        :href="route('admin.screens')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('admin.screens'),
        }"
      >
        {{ trans("words.screens") }}
      </Link>
    </template>
    <template v-if="$page.props.auth?.user?.type === 'client'">
      <Link
        :href="route('appointments.index')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('appointments.index'),
        }"
      >
        {{ trans("words.appointments") }}
      </Link>
      <Link
        :href="route('quiz.client')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('quiz.client'),
        }"
      >
        {{ trans("words.quiz") }}
      </Link>
      <Link
        :href="route('user.profile.me')"
        class="hover:font-bold"
        :class="{
          'text-zinc-700 hover:text-zinc-800': props.dark,
          'underline  font-bold': route().current('user.profile.me'),
        }"
      >
        {{ trans("words.my_data") }}
      </Link>
    </template>
    <Link
      v-if="$page.props.auth.user"
      :href="route('profile.edit')"
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('profile.edit'),
      }"
    >
      {{ trans("words.settings") }}
    </Link>
    <Link
      v-else
      :href="route('login')"
      class="hover:font-bold"
      :class="{
        'text-zinc-700 hover:text-zinc-800': props.dark,
        'underline  font-bold': route().current('login'),
      }"
    >
      {{ trans("words.login") }}
    </Link>
  </nav>
</template>
