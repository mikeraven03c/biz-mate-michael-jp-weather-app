<script setup>
import { Forecast } from "src/components/js/forecast";
import { onMounted, ref } from "vue";

const forecast = new Forecast();
const forecastDailyList = ref([]);

const props = defineProps({
  city: {
    type: String,
    default: "",
  },
  form: {
    type: Object,
    default: () => ({
      fsq_id: 1,
      latitude: 0,
      longitude: 0,
    }),
  },
});

onMounted(() => {
  forecast.getPlaceForecast(
    props.city,
    props.form.fsq_id,
    props.form.latitude,
    props.form.longitude,
    () => {
      forecastDailyList.value = forecast.placeDailyList;
    }
  );
});
</script>

<template>
  <div>
    <div
      v-for="(dailyForecast, key) in forecastDailyList"
      :key="key"
      style="max-width: 100%"
      class="q-my-sm"
    >
      <q-list bordered separator>
        <q-item-label header
          ><p class="text-bold text-grey text-h5">
            <q-chip class="text-white text-h5" color="teal"
              >Date: {{ key }}</q-chip
            >
          </p></q-item-label
        >
        <q-item v-for="(forecast, key2) in dailyForecast" :key="key2">
          <q-item-section>{{ forecast.time }}</q-item-section>
          <q-item-section>{{ forecast.celcius }} °</q-item-section>
          <q-item-section
            >{{ forecast.weather[0].description }}
          </q-item-section>
          <q-item-section
            >humidity: {{ forecast.main.humidity }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

