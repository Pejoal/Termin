<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import AppointmentsGroup from "./Partials/AppointmentsGroup.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
  previousAppointments: {
    type: Array,
    default: [],
  },
  upcomingAppointments: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <Head :title="trans('words.admin_dashboard')" />

  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            {{ trans("words.appointment_requests") }}
          </h2>
        </header>
        <main class="space-y-2 rounded-lg">
          <AppointmentsGroup :appointments="upcomingAppointments" :header="'upcoming_appointments'" />
          <AppointmentsGroup :appointments="previousAppointments" :header="'previous_appointments'" />
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
