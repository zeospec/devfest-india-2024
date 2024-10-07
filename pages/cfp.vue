<template>
  <v-container fluid class="google-font">
    <v-row justify="start" align="start">
      <v-col md="10" sm="12" cols="12">
        <h1 class="google-font">Call for Presentations</h1>
        <p class="my-0 mb-8 h1-subheading">
          Communities from each chapter, all over India have gathered together
          to make India DevFest a success. Locate your nearest Google Developer
          group and join the event as a Speaker right here!
        </p>

        <v-card
          outlined
          variant="flat"
          style="background-color: white; border-radius: 15px; border: 0"
        >
          <v-card-title>
            CFPs
            <v-spacer></v-spacer>
            <v-text-field
              rounded
              variant="outlined"
              v-model="search"
              density="compact"
              class="mt-6"
              placeholder="Search"
              append-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="eventsData"
            :search="search"
            width="100%"
            :mobile-breakpoint="0"
          >
            <template v-slot:[`item.CommunityName`]="{ item }">
              <a :href="item.CommunityPage" target="_blank">{{
                item.CommunityName
              }}</a>
            </template>
            <template v-slot:[`item.DevFestName`]="{ item }">
              <a :href="item.EventLink" target="_blank">{{
                item.DevFestName
              }}</a>
            </template>
            <template v-slot:[`item.StartingDate`]="{ item }">
              {{ formatDate(item.StartingDate) }}
            </template>
            <template v-slot:[`item.custom`]="{ item }">
              <a
                v-if="
                  new Date(item.CFP.LastDate) >= new Date().setHours(0, 0, 0, 0)
                "
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
</template>
  
<script setup>
const { eventsData, mainData } = useJSONData();
definePageMeta({
  layout: "default",
});
const search = ref("");

const headers = ref([
  { title: "Community", value: "CommunityName" },
  { title: "City", value: "City" },
  { title: "DevFest", value: "DevFestName" },
  { title: "DevFest Date", value: "StartingDate" },
  { title: "CFP Link", value: "custom" },
  { title: "CFP Deadline", value: "deadline" },
]);

// Format date function
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "CFP | Google Developers Group India",
  description: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogLocale:'en_US',
  keywords: "GDG, DevFest, Google, DevFest",
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "CFP | Google Developers Group India",
  ogDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogImage: `https://devfest.gdgindia.dev/thumbnail.jpg`,
  ogUrl: "https://devfest.gdgindia.dev/",
  ogType: "website",
  twitterTitle: "CFP | Google Developers Group India",
  twitterDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  twitterImage: `https://devfest.gdgindia.dev/thumbnail.jpg.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>
  
<style scoped>
/* Add your custom styles here */
</style>