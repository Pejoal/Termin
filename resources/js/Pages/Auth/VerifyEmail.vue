<script setup>
import { computed } from "vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
  status: String,
});

const form = useForm({});

const submit = () => {
  form.post(route("verification.send"));
};

const verificationLinkSent = computed(
  () => props.status === "verification-link-sent"
);
</script>

<template>
  <GuestLayout>
    <Head title="Email Verification" />

    <div class="my-2">
      Danke für's Registrieren! Bevor Sie beginnen, können Sie Ihre
      E-Mail-Adresse bestätigen Adresse, indem Sie auf den Link klicken, den wir
      Ihnen gerade per E-Mail zugesandt haben? Wenn nicht Wenn Sie die E-Mail
      erhalten, senden wir Ihnen gerne eine weitere zu.
    </div>

    <div
      class="my-2 font-medium text-sm text-green-700"
      v-if="verificationLinkSent"
    >
      Ein neuer Bestätigungslink wurde an die von Ihnen angegebene
      E-Mail-Adresse gesendet bei der Anmeldung.
    </div>

    <form @submit.prevent="submit">
      <div class="mt-4 flex items-center justify-between">
        <button
          class="btn btn-primary"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Bestätigungsmail erneut senden
        </button>

        <Link
          :href="route('logout')"
          method="post"
          as="button"
          class="underline text-white ml-3 bg-red-600 px-2 py-1 rounded-md"
          >Ausloggen</Link
        >
      </div>
    </form>
  </GuestLayout>
</template>
