
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "city",
  },
  code: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  description: {
    type: String,
    default: "lorem ipsum",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="q-pa-sm">
    <q-card class="my-card">
      <q-img :src="props.image" :ratio="16 / 9">
        <div class="absolute-bottom text-h6">
          {{ props.title }}
          <q-btn
            :to="'city/' + props.code"
            fab
            color="red"
            icon="search"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />
        </div>
      </q-img>

      <q-card-section>{{ props.description }}</q-card-section>
    </q-card>
  </div>
</template>
