<script setup>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const props = defineProps({
  appointments: {
    tpye: Array,
    default: [],
  },
});

const form = useForm({
  date: "",
  time: "",
});

const submit = (date, time) => {
  form.date = date;
  form.time = time;
  form.post(route("appointment.reserve"), {
    onSuccess: () => {},
    onFinish: () => form.reset(["date", "time"]),
  });
};
</script>

<template>
  <Head>
    <title>Appointments</title>
  </Head>
  <AuthLayout>
    <template #left-sidebar> </template>
    <template #content>
      <section class="border-l border-white h-screen p-4 overflow-x-auto">
        <header class="flex items-center justify-center">
          <h2 class="text-xl font-bold">Available Appointments</h2>
        </header>
        <InputError class="mt-2" :message="form.errors.date" />
        <InputError class="mt-2" :message="form.errors.time" />
        <Transition
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          class="transition ease-in-out"
        >
          <p v-if="form.recentlySuccessful" class="text-sm">Reserve Successful</p>
        </Transition>
        <main class="flex">
          <section v-for="appointment in props.appointments" class="flex-1">
            <h5 class="text-center">
              {{ appointment.date }}
            </h5>
            <h5 class="text-center">
              <b> {{ appointment.day_name }}</b>
            </h5>
            <section v-if="!appointment.off">
              <section
                v-for="time in appointment.business_hours"
                class="my-2 flex items-center justify-center"
              >
                <template v-if="!appointment.reserved_hours.includes(time)">
                  <form
                    @submit.prevent="submit(appointment['full_date'], time)"
                  >
                    <button
                      class="btn btn-primary"
                      type="submit"
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                    >
                      {{ time }}
                    </button>
                  </form>
                </template>
                <template v-else>
                  <button class="btn btn-secondary" disabled>
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
