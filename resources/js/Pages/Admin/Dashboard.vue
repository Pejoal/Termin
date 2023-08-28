<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import AppointmentsGroup from "./Partials/AppointmentsGroup.vue";
import { Head } from "@inertiajs/vue3";

const props = defineProps({
  previousAppointments: {
    type: Object,
    default: {},
  },
  upcomingAppointments: {
    type: Object,
    default: {},
  },
  users: {
    type: Array,
    default: [],
  },
});
$(document).ready(() => {
  $(".chosen-select").chosen({
    no_results_text: "Oops, nothing found!",
    // disable_search_threshold: 10,
    // max_selected_options: 2,
  });
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
          <section class="flex items-center">
            <label for="users" class="text-2xl font-bold w-1/3"
              >{{ trans("words.filter_by_user") }}
            </label>
            <select
              id="users"
              class="chosen-select"
              :data-placeholder="trans('words.choose_a_user')"
              multiple
            >
              <option v-for="user in users" :value="user.id">
                {{ user.full_name }}
              </option>
            </select>
          </section>
          <AppointmentsGroup
            :appointments="upcomingAppointments"
            :header="'upcoming_appointments'"
          />
          <AppointmentsGroup
            :appointments="previousAppointments"
            :header="'previous_appointments'"
          />
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
<style>
.chosen-container {
  @apply flex-1 px-2 h-10 m-0;
}
.chosen-choices {
  @apply h-10 rounded-lg !important;
}
</style>
