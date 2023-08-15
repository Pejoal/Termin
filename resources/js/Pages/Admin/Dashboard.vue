<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
  pendingAppointments: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <Head title="Admin Dashboard" />

  <AdminLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            Appointments Requests
          </h2>
        </header>
        <main class="bg-slate-100 space-y-2 rounded-lg">
          <section v-for="appointment in props.pendingAppointments" :key="appointment.id" class="bg-white rounded-lg p-2">
            <h3 class="font-bold">Requester: {{  }}</h3>
            {{ appointment }}
          </section>
        </main>
      </section>
    </template>
  </AdminLayout>
</template>
