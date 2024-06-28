<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { city } from "src/components/js/city";
import ForecastCitySection from "pages/CitySection/ForecastCitySection.vue";
import VenueCitySection from "pages/CitySection/VenueCitySection.vue";

const route = useRoute();
const cityKey = route.params.city.toLowerCase();
const cityModel = ref(cityKey);
const cityDetail = ref();

const tab = ref("forecast");

cityDetail.value = city[cityKey];

watch(
  () => route.params.city,
  async (newCity) => {
    cityModel.value = newCity.toLowerCase();
    cityDetail.value = city[newCity.toLowerCase()];
  }
);
</script>

<template>
  <q-page>
    <div
      class="flex flex-center display-1"
      :style="{ 'background-image': 'url(' + cityDetail.image + ')' }"
    >
      <div class="card text-white">
        <h1>{{ cityDetail.title }}</h1>
        <p>{{ cityDetail.description }}</p>
      </div>

      <div class="overlay"></div>
    </div>
    <div>
      <q-tabs v-model="tab" class="text-red">
        <q-tab name="forecast" icon="cloud" label="City Forecast" />
        <q-tab name="venue" icon="location_on" label="Place Forecast" />
        <q-tab name="map" icon="map" label="Map" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="forecast">
          <forecast-city-section :city="cityModel"></forecast-city-section>
        </q-tab-panel>
        <q-tab-panel name="venue" class="flex flex-center">
          <venue-city-section :city="cityModel"></venue-city-section
        ></q-tab-panel>
        <q-tab-panel name="map" class="flex flex-center">
          <iframe
            v-if="cityDetail.embed"
            :src="cityDetail.embed"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe
        ></q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped>
.display-1 {
  height: 50vh;
  background-size: cover;
  background-position: 50% -100%;
  background-attachment: fixed;
}

.card {
  position: absolute;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
