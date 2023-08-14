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
            <section v-if="!appointment.off">
              <section v-for="time in appointment.business_hours" class="my-2 flex items-center justify-center">
                <template v-if="!appointment.reserved_hours.includes(time)">
                  <form>
                    <input
                      type="hidden"
                      name="date"
                      :value="appointment['full_date']"
                    />
                    <input type="hidden" name="time" :value="time" />
                    <button
                      class="btn btn-primary "
                      type="submit"
                    >
                      {{ time }}
                    </button>
                  </form>
                </template>
                <template v-else>
                  <button
                    class="btn btn-secondary"
                    disabled
                  >
                    {{ time }}
                  </button>
                </template>
              </section>
            </section>
          </section>
        </main>
      </section>
    </template>
  </AuthLayout>
</template>
