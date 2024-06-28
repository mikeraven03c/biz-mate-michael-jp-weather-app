<script setup>
import { ref } from "vue";
import { cityList } from "components/js/city";
const search = ref("");
const options = ref(cityList);

function filterFn(val, update, abort) {
  update(() => {
    const needle = val.toLowerCase();
    options.value = cityList.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
}
</script>

<template>
  <div class="display-section">
    <div class="items-center">
      <q-card class="my-card card-behind">
        <q-card-section>
          <q-card-section>
            <p class="text-h3">Welcome to Japan Weather App</p>
            <p class="text-bold">Search any city of Japan you want to travel</p>
            <q-select
              filled
              v-model="search"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="options"
              @filter="filterFn"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical align="right">
          <q-btn
            flat
            color="primary"
            :to="'city/' + (search ? search.toLowerCase() : '')"
          >
            Search
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <div class="overlay"></div>
  </div>
</template>
<style scoped>
.display-section {
  position: relative;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-behind {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>