<template>
    <NuxtLayout name="default">
    <v-main>
      <v-container fluid class="google-font">
        <v-row justify="start" align="start">
          <v-col md="10" sm="12" cols="12">
            <p class="google-font gdg-heading mb-0 grey--text text--darken-4">
              Call for Presentations
            </p>
            <p class="my-0 mb-8 h1-subheading">
              Communities from each chapter, all over India have gathered together
              to make India DevFest a success. Locate your nearest Google Developer
              group and join the event as a Speaker right here!
            </p>
  
            <v-card
              outlined
              style="background-color: white; border-radius: 15px; border: 0"
            >
              <v-card-title>
                CFPs
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  style="max-width: 500px"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  rounded
                  dense
                  solo-inverted
                  hide-details
                  flat
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="filteredData"
                :search="search"
                mobile-breakpoint="0"
                :loading="loader"
              >
                <template v-slot:[`item.CommunityName`]="{ item }">
                  <a :href="item.CommunityPage" target="_blank">{{ item.CommunityName }}</a>
                </template>
                <template v-slot:[`item.DevFestName`]="{ item }">
                  <a :href="item.EventLink" target="_blank">{{ item.DevFestName }}</a>
                </template>
                <template v-slot:[`item.StartingDate`]="{ item }">
                  {{ formatDate(item.StartingDate) }}
                </template>
                <template v-slot:[`item.custom`]="{ item }">
                  <a
                    v-if="new Date(item.CFP.LastDate) >= new Date().setHours(0, 0, 0, 0)"
                    color="red"
                    style="font-size: 14px; text-decoration: underline"
                    :href="item.CFP.Link"
                    target="_blank"
                  >
                    Apply now
                  </a>
                  <a v-else class="disabled">Applications closed</a>
                </template>
                <template v-slot:[`item.deadline`]="{ item }">
                  {{ formatDate(item.CFP.LastDate) }}
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</NuxtLayout>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  definePageMeta({
  layout: false,
});
  const data = ref([]);
  const search = ref('');
  const loader = ref(true);
  
  const headers = [
    { text: 'Community', value: 'CommunityName' },
    { text: 'City', value: 'City' },
    { text: 'DevFest', value: 'DevFestName' },
    { text: 'DevFest Date', value: 'StartingDate' },
    { text: 'CFP Link', value: 'custom' },
    { text: 'CFP Deadline', value: 'deadline' },
  ];
  
  // Set page title

  
  // Method to fetch data
  async function getData() {
    loader.value = true;
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/devfestindia/devfest-india-data-2023/main/data/events.json'
      );
      const events = await res.json();
      data.value = events.filter((e) => e.CFP.Status === 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      loader.value = false;
    }
  }
  
  // Filtered data computed property based on search query
  const filteredData = computed(() => {
    if (!search.value) return data.value;
    return data.value.filter((item) =>
      item.CommunityName.toLowerCase().includes(search.value.toLowerCase())
    );
  });
  
  // Format date function
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  
  // Fetch data when the component is mounted
  onMounted(() => {
    getData();
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>