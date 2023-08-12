<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
  firstname: "",
  lastname: "",
  username: "",
  gender: "",
  email: "",
  password: "",
  password_confirmation: "",
  profile_photo: null,
  // terms: false,
});

const submit = () => {
  form.post(route("register"), {
    preserveScroll: true,
    onFinish: () => form.reset("password", "password_confirmation"),
  });
};
</script>

<template>
  <GuestLayout>
    <Head title="Register" />

    <form
      @submit.prevent="submit"
      class="bg-zinc-300 w-full mt-2 mb-4 rounded-lg md:container px-8 py-4 flex flex-col gap-2"
    >
      <div>
        <InputLabel for="firstname" value="First Name" />

        <TextInput
          id="firstname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.firstname"
          placeholder="First Name"
          required
          autocomplete="firstname"
          autofocus
        />

        <InputError class="mt-2" :message="form.errors.firstname" />
      </div>

      <div>
        <InputLabel for="lastname" value="Last Name" />

        <TextInput
          id="lastname"
          type="text"
          class="mt-1 block w-full"
          v-model="form.lastname"
          placeholder="Last Name"
          autocomplete="lasstname"
          required
        />

        <InputError class="mt-2" :message="form.errors.lastname" />
      </div>
      <div>
        <InputLabel for="username" value="username" />

        <TextInput
          id="username"
          type="text"
          class="mt-1 block w-full"
          v-model="form.username"
          placeholder="User Name"
          autocomplete="username"
          required
        />

        <InputError class="mt-2" :message="form.errors.username" />
      </div>
      <div>
        <InputLabel value="Gender" />
        <div class="flex justify-center gap-12">
          <section>
            <input
              type="radio"
              id="male"
              value="male"
              v-model="form.gender"
              autocomplete="gender"
            />
            <label class="ml-2" for="male">Male</label>
          </section>
          <section>
            <input
              type="radio"
              id="female"
              value="female"
              v-model="form.gender"
              autocomplete="gender"
            />
            <label class="ml-2" for="female"> Female</label>
          </section>
        </div>
        <InputError class="mt-2" :message="form.errors.gender" />
      </div>

      <div class="mt-4">
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          placeholder="Email"
          autocomplete="email"
          required
        />

        <InputError class="mt-2" :message="form.errors.email" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Password" />

        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          placeholder="Password"
          required
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="form.errors.password" />
      </div>

      <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />

        <TextInput
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          placeholder="Confirm Password"
          required
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="form.errors.password_confirmation" />
      </div>

      <section class="flex justify-between flex-col sm:flex-row">
        <div class="my-2">
          <label class="pr-2" for="profile_photo"> Profile Photo </label>
          <input
            id="profile_photo"
            type="file"
            @input="form.profile_photo = $event.target.files[0]"
          />
        </div>
      </section>
      <p
        v-if="form.errors.profile_photo"
        class="text-sm bg-red-600 rounded-md my-1 px-2 py-1"
      >
        {{ form.errors.profile_photo }}
      </p>
      <progress
        v-if="form.progress"
        :value="form.progress.percentage"
        max="100"
      >
        {{ form.progress.percentage }}%
      </progress>
      <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        class="transition ease-in-out"
      >
        <p v-if="form.recentlySuccessful" class="text-sm">Uploaded</p>
      </Transition>

      <div class="flex items-center justify-end mt-2">
        <Link
          :href="route('login')"
          class="underline text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Already Registered
        </Link>

        <button
          class="ml-4 btn btn-primary"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Register
        </button>
      </div>
    </form>
  </GuestLayout>
</template>
