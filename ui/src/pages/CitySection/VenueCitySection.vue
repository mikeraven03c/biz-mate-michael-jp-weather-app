<script setup>
import { Venue } from "src/components/js/venue";
import VenueForecastCitySection from "pages/CitySection/VenueForecastCitySection.vue";
import { ref } from "vue";
import { onMounted, watch } from "vue";

const props = defineProps({
  city: {
    type: String,
    default: "",
  },
});

const venueList = ref([]);
const modal = ref(false);
const form = ref({});

const venue = new Venue();

function viewPlaceForecast(name, fsqid, lat, lon) {
  modal.value = !modal.value;

  form.value = {
    name: name,
    fsq_id: fsqid,
    latitude: lat,
    longitude: lon,
  };
}

onMounted(() => {
  venue.getVenue(props.city, function (data) {
    venueList.value = venue.venues;
  });
});

watch(
  () => props.city,
  (newValue, oldValue) => {
    venue.getVenue(newValue, function (data) {
      venueList.value = venue.venues;
    });
  }
);
</script>

<template>
  <div>
    <q-list bordered>
      <q-item class="q-ma-md" v-for="(place, key) in venueList" :key="key">
        <q-item-section>
          <q-item-label>{{ place.name }}</q-item-label>
          <q-item-label caption>
            <q-chip
              v-for="(category, key) in place.categories"
              :key="key"
              color="teal"
              text-color="white"
              :label="category.name"
            />
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn
            round
            class="q-ml-xs"
            color="teal"
            icon="cloud"
            size="sm"
            @click="
              viewPlaceForecast(
                place.name,
                place.fsq_id,
                place.geocodes.main.latitude,
                place.geocodes.main.longitude
              )
            "
          />
        </q-item-section>
      </q-item>
    </q-list>

    <q-dialog v-model="modal" full-width class="myClass">
      <q-card style="max-width: 750px">
        <div>
          <q-toolbar>
            <q-toolbar-title
              ><span class="text-weight-bold">{{
                form.name
              }}</span></q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section>
            <venue-forecast-city-section
              :city="props.city"
              :form="form"
            ></venue-forecast-city-section>
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
.myClass {
  max-width: none !important;
  width: 800px;
}
</style>
