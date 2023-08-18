<script setup>
import AppintmentModal from "@/Components/AppintmentModal.vue";
import Locales from "@/Components/Locales.vue";
import ResuableModal from "@/Components/ResuableModal.vue";
import AdminLayout from "@/Layouts/AdminLayout.vue";
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
  <Head title="Admin Dashboard" />

  <AdminLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white min-h-screen p-4">
        <header class="flex items-center justify-center mb-2">
          <h2 class="text-xl font-bold pb-1 border-b border-b-black">
            Terminanfragen
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
                :header="'Termin aktualisieren'"
                :show="showModal"
                @close="showModal = false"
              >
                <template #content>
                  <AppintmentModal
                    :date="appointment"
                    v-on:save="showModal = false"
                  />
                </template>
              </ResuableModal>
            </Teleport>
            <section>
              <h3>
                Anforderer: <strong> {{ appointment.requester }} </strong>
              </h3>
              <p>{{ appointment.date }} Um {{ appointment.time }}</p>
            </section>
            <section class="btn btn-info">{{ appointment.status }}</section>
          </section>
        </main>
      </section>
    </template>
  </AdminLayout>
</template>
