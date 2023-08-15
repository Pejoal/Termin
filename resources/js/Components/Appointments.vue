<script setup>
const props = defineProps({
  date: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
<template>
  <section
    class="flex items-center justify-between my-2 bg-white p-2 rounded-lg"
  >
    <p>At: {{ props.date.date }} {{ props.date.time }}</p>
    <section v-if="props.date.status == 'pending'" class="btn btn-info">
      {{ props.date.status }}
    </section>
    <section
      v-else-if="props.date.status == 'approved'"
      class="btn btn-success"
    >
      {{ props.date.status }}
    </section>
    <section
      v-else-if="props.date.status == 'canceled'"
      class="btn btn-warning"
    >
      {{ props.date.status }}
    </section>
    <section v-else-if="props.date.status == 'declined'" class="btn btn-danger">
      {{ props.date.status }}
    </section>
  </section>
</template>
