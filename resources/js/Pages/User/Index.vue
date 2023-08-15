<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";

let props = defineProps({
  previousDates: {
    type: Object,
    required: {},
  },
  comingDates: {
    type: Object,
    required: {},
  },
});

</script>

<template>
  <Head title="User" />

  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            My Appointments
          </h2>
        </header>
        <h2 class="text-lg font-bold text-center">Coming Appointments</h2>
        <template v-if="props.comingDates != {}">
          <section v-for="date in props.comingDates" :key="date.id" class="flex items-center justify-between my-2 bg-white p-2 rounded-lg">
            <p>At {{ date.date }} {{ date.time }}</p>
            <section class="btn btn-info">{{ date.status }}</section>
          </section>
        </template>
        <template v-else>
          <h4 class="text-lg">There are no coming appointments</h4>
        </template>

        <h2 class="text-lg font-bold text-center">Previous Appointments</h2>
        <template v-if="props.previousDates != {}">
          <section v-for="date in props.previousDates" :key="date.id" class="flex items-center justify-between my-2 bg-white p-2 rounded-lg">
            <p>At {{ date.date }} {{ date.time }}</p>
            <section class="btn btn-info">{{ date.status }}</section>
          </section>
        </template>
        <template v-else>
          <h4 class="text-lg">There are no coming appointments</h4>
        </template>
      </section>
    </template>
  </AuthLayout>
</template>
