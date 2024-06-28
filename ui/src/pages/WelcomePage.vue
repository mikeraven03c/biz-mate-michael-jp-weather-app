<script setup>
import SearchIndexSection from "pages/IndexSection/SearchIndexSection.vue";
import CityCardComponent from "components/CityCard.vue";
import { city } from "components/js/city";
defineOptions({
  name: "WelcomePage",
});
</script>

<template>
  <q-page>
    <search-index-section></search-index-section>

    <q-card class="q-ma-sm q-pa-md">
      <h5>Popular city destination</h5>
      <div class="q-pa-md row items-center">
        <div
          v-for="(place, key) in city"
          :key="key"
          class="col-xs-12 col-sm-6 col-md-4 col-4"
        >
          <city-card-component
            :title="city[key].title"
            :image="city[key].image"
            :description="city[key].description"
            :code="key"
          ></city-card-component>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<style scoped>
.display-section {
  background-image: url("https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>

