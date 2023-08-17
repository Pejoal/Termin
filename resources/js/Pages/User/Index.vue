<script setup>
import Appointments from "@/Components/Appointments.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";

let props = defineProps({
  previousDates: {
    type: Object,
    default: {},
  },
  upcomingDates: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <Head title="User" />

  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white min-h-screen p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            Meine Termine
          </h2>
        </header>
        <h2 class="text-lg font-bold text-center">Bevorstehende Termine</h2>
        <template v-if="props.upcomingDates != {}">
          <Appointments
            v-for="date in props.upcomingDates"
            :key="date.id"
            :date="date"
          />
        </template>
        <template v-else>
          <h4 class="text-lg">Es stehen keine Termine an</h4>
        </template>

        <h2 class="text-lg font-bold text-center">Frühere Termine</h2>
        <template v-if="props.previousDates != {}">
          <Appointments
            v-for="date in props.previousDates"
            :key="date.id"
            :date="date"
          />
        </template>
        <template v-else>
          <h4 class="text-lg">Es gibt keine vorherigen Termine</h4>
        </template>
      </section>
    </template>
  </AuthLayout>
</template>
