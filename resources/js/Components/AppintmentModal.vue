<script setup>
import { useForm } from "@inertiajs/vue3";
import { computed, watch, ref } from "vue";

const emits = defineEmits(["save"]);

const props = defineProps({
  date: {
    type: Object,
    default: {},
    required: true,
  },
});

// let modal = ref(false);

// Stop Scrolling When The Modal is Opened
// const isModalOpen = computed(() => modal.value);
// watch(isModalOpen, (isOpen) => {
//   if (isOpen) {
//     document.body.classList.toggle("overflow-y-hidden");
//   } else {
//     document.body.classList.toggle("overflow-y-hidden");
//   }
// });

const form = useForm({
  location: props.date.location,
  notes: props.date.notes,
});

const update = () => {
  form.put(route("appointment.update", [props.date.id]), {
    onSuccess: () => {
      emits("save");
    },
    onFinish: () => form.reset(["locations", "notes"]),
  });
};

const cancel = () => {
  form.delete(route("appointment.cancel", [props.date.id]), {
    onSuccess: () => {
      emits("save");
    },
    onFinish: () => form.reset(["locations", "notes"]),
  });
};

const approve = () => {
  form.put(route("appointment.approve", [props.date.id]), {
    onSuccess: () => {
      emits("save");
    },
    onFinish: () => form.reset(["locations", "notes"]),
  });
};

const decline = () => {
  form.put(route("appointment.decline", [props.date.id]), {
    onSuccess: () => {
      emits("save");
    },
    onFinish: () => form.reset(["locations", "notes"]),
  });
};
</script>

<template>
  <main class="my-2 bg-zinc-300 mx-2 p-3 rounded-lg">
    <section class="flex items-center justify-between">
      <p>{{ props.date.date }} Um {{ props.date.time }}</p>
      <section v-if="props.date.status == 'pending'" class="btn btn-info">
        ausstehend
      </section>
      <section
        v-else-if="props.date.status == 'approved'"
        class="btn btn-success"
      >
        akzeptiert
      </section>
      <section
        v-else-if="props.date.status == 'cancelled'"
        class="btn btn-warning"
      >
        abgesagt
      </section>
      <section
        v-else-if="props.date.status == 'declined'"
        class="btn btn-danger"
      >
        abgelehnt
      </section>
    </section>
    <form @submit.prevent="update">
      <section class="flex items-center my-2">
        <label for="location" class="w-36 px-4">Wo</label>
        <input
          type="text"
          class="block rounded-lg flex-1 px-2 mx-2 h-10"
          name="location"
          id="location"
          placeholder="Wo"
          v-model="form.location"
        />
      </section>
      <section class="flex items-center my-2">
        <label for="notes" class="w-36 px-4">Notizen</label>
        <textarea
          class="rounded-lg flex-1 px-2 mx-2 h-40"
          name="notes"
          id="notes"
          placeholder="Notizen"
          v-model="form.notes"
        >
        </textarea>
      </section>
      <footer class="flex items-center justify-center gap-3">
        <button type="submit" class="btn btn-primary">
          Termin aktualisieren
        </button>
        <button
          v-if="$page.props.auth.user.type === 'client'"
          type="button"
          class="btn btn-danger"
          @click="cancel"
        >
          Termin absagen
        </button>
        <template
          v-else-if="
            ['super admin', 'admin'].includes($page.props.auth.user.type)
          "
        >
          <button type="button" class="btn btn-success" @click="approve">
            Termin annehmen
          </button>
          <button type="button" class="btn btn-danger" @click="decline">
            Termin ablehnen
          </button>
        </template>
      </footer>
    </form>
  </main>
</template>
