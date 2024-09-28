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
  const data = ref([]);
  const passedDevFests = ref([]);
  
  // Function to fetch events data
  async function getAllEvents() {
    loader.value = true;
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/devfestindia/devfest-india-data-2023/main/data/events.json'
      );
      const events = await res.json();
  
      // Filter past events
      passedDevFests.value = events.filter((i) => {
        return new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) < 0;
      });
  
      // Filter upcoming events and sort them by date
      const upcomingDevFests = events.filter((i) => {
        return new Date(i.StartingDate) - new Date().setHours(0, 0, 0, 0) >= 0;
      }).sort((a, b) => {
        return new Date(a.StartingDate) - new Date(b.StartingDate);
      });
  
      data.value = upcomingDevFests;
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      loader.value = false;
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