<script setup>
import { Forecast } from "src/components/js/forecast";
import { ref } from "vue";
import { watch } from "vue";

const props = defineProps({
  city: {
    type: String,
    default: "",
  },

  list: {
    type: Array,
    default: () => [],
  },
  dailyList: {
    type: Object,
    default: () => {},
  },
});

const forecastDailyList = ref([]);

const forecast = new Forecast();

forecast.getForecast(props.city, function (data) {
  forecastDailyList.value = forecast.dailyList;
});

watch(
  () => props.city,
  (newValue, oldValue) => {
    forecast.getForecast(newValue, function (data) {
      forecastDailyList.value = forecast.dailyList;
    });
  }
);
</script>

<template>
  <div class="parent column">
    <div
      v-for="(dailyForecast, key) in forecastDailyList"
      :key="key"
      style="max-width: 750px"
      class="child"
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

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.child {
  max-width: 450px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>>