<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
  appointments: {
    tpye: Array,
    default: [],
  },
});
</script>

<template>
  <Head>
    <title>Appointments</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen p-4">
        <header class="flex items-center justify-center">
          <h2 class="text-xl font-bold">Available Appointments</h2>
        </header>
        <main class="flex">
          <section v-for="appointment in props.appointments" class="flex-1">
            <h5 class="text-center">
              {{ appointment.date }}
            </h5>
            <h5 class="text-center">
              <b> {{ appointment.day_name }}</b>
            </h5>
          </section>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
