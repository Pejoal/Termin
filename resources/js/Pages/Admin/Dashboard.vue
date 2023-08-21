<script setup>
import AppointmentModal from "./Partials/AppointmentModal.vue";
import ResuableModal from "@/Components/ResuableModal.vue";
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";

const props = defineProps({
  pendingAppointments: {
    type: Array,
    default: [],
  },
});
let showModal = ref(false);
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
        <main class="bg-slate-100 space-y-2 rounded-lg">
          <section
            v-for="appointment in props.pendingAppointments"
            :key="appointment.id"
            class="flex items-center justify-between bg-white shadow-lg rounded-lg p-2"
            @click="showModal = true"
          >
            <Teleport to="#modal">
              <ResuableModal
                :classes="['w-[90%] md:w-[85%] lg:w-[80%] h-[60%]']"
                :header="trans('words.update_appointment')"
                :show="showModal"
                @close="showModal = false"
              >
                <template #content>
                  <AppointmentModal
                    :date="appointment"
                    v-on:save="showModal = false"
                  />
                </template>
              </ResuableModal>
            </Teleport>
            <section>
              <h3>
                {{ trans("words.requester") }}
                : <strong> {{ appointment.requester }} </strong>
              </h3>
              <p>
                {{ appointment.date }} {{ trans("words.at") }}
                {{ appointment.time }}
              </p>
            </section>
            <section class="btn btn-info">{{ appointment.status }}</section>
          </section>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
