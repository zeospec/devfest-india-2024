<template>
  <v-container fluid class="">
    <v-row justify-center align="center">
      <v-col md="7" sm="6" cols="12">
        <h1 class="responsive-h1 my-4">
          Find lastest <br />
          upcoming Devfest
        </h1>

        <v-text-field
          rounded
          variant="outlined"
          max-width="400"
          density="compact"
          class="mt-6"
          placeholder="Search for event in your city"
          append-inner-icon="mdi-search-web"
        ></v-text-field>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem expedita sed, exercitationem accusantium consequatur recusandae optio praesentium sapiente assumenda corrupti dolore numquam cum odit quae, modi consectetur sequi excepturi vel.</p>
        <v-btn
          rounded
          color="#4284F3"
          to="/badge.vue"
          class="my-2 mt-3 mr-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize;"
          variant="flat"
          >Get the DevFest Badge</v-btn
        >
        <v-btn
          rounded
          color="#4284F3"
          to="/badge.vue"
          class="my-2 mt-3 mr-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize;"
          variant="flat"
          >See All DevFests</v-btn
        >
      </v-col>
      <v-col md="5" sm="6" cols="12">
        <CoreCommunityMap/>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { mainData } = useJSONData();
</script>
  
<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}


</style>
  