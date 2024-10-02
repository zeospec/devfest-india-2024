<template>
    <NuxtLayout name="default">
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col md="12">
              <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
                DevFests in India
              </p>
              <p class="my-0 mb-8 h1-subheading google-font">
                Communities from each chapter, all over the India have gathered
                together to make India DevFest a success. Locate your nearest google
                developer group and join the event right here!
              </p>
            </v-col>
          </v-row>
  
          <!-- Loader -->
          <!-- <v-row align="start" justify="start" class="my-10" v-if="loader">
            <v-col md="3" sm="6" v-for="i in 4" :key="i">
              <v-skeleton-loader style="border-radius: 15px;" class="mx-auto" type="card"></v-skeleton-loader>
            </v-col>
          </v-row> -->
          <!-- Loader -->
  
          <!-- Upcoming DevFest -->
          <v-row align="start" justify="start" v-if="!loader">
            <v-col md="3" sm="6" v-for="(item, index) in upcomingDevFests" :key="index">
              <devFestInfoDialogeVue :item="item" />
            </v-col>
          </v-row>
          <!-- Upcoming DevFest -->
  
          <!-- Past DevFests -->
          <p v-if="!loader && passedDevFests?.length > 0" class="mt-10 mb-1">Past DevFests</p>
          <v-row align="start" justify="start" v-if="!loader">
            <v-col md="3" sm="6" v-for="(item, index) in passedDevFests" :key="index">
              <devFestInfoDialogeVue :item="item" />
            </v-col>
          </v-row>
          <!-- Past DevFests -->
        </v-container>
      </v-main>
    </NuxtLayout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import devFestInfoDialogeVue from '@/components/common/devFestInfoDialoge.vue';
  definePageMeta({
  layout: false,
});
  // Reactive state
  const loader = ref(true);
const upcomingDevFests = ref([]);
const passedDevFests = ref([]);
  
  // Function to fetch events data
  async function getAllEvents() {
    loader.value = true;
    try {
        let res = await fetch(
          "https://raw.githubusercontent.com/devfestindia/devfest-india-data-2024/refs/heads/main/data/events.json"
        );
        res = await res.json();


    // DEBUG: Log current date in various formats
    const currentDate = new Date();

    // Filter upcoming events
    upcomingDevFests.value = res.filter((event) => {
      const eventStartDate = new Date(event.StartingDate);
      
      return eventStartDate >= currentDate;
    });

    // Filter passed events
    passedDevFests.value = res.filter((event) => {
      const eventStartDate = new Date(event.StartingDate);
      return eventStartDate < currentDate;
    });

    // DEBUG: Log filtered results

  } catch (error) {
    console.error("Error fetching events", error);
  } finally {
    loader.value = false; // Set the loader to false after fetching the data
  }
  }
  
  // Fetch events when component is mounted
  onMounted(() => {
    getAllEvents();
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>