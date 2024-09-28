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
          max-width="480"
          density="compact"
          class="mt-6"
          placeholder="Search for event in your city"
          append-inner-icon="mdi-magnify"
        ></v-text-field>
        <p>
          Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas
        </p>
        <v-btn
          rounded
          color="#4284F3"
          to="/"
          class="my-2 mt-3 mr-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize;padding: 14px;display: inline-block;height: auto;border-radius: 50px;"
          variant="flat"
          ><span class="pr-2"> Get the DevFest Badge </span><img src="/assets/img/lucide_badge.svg"/>
          </v-btn
        >
        <v-btn
          rounded
          color="#fff"
          to="/FindAnEventPage"
          class="my-2 mt-3 mr-3 white-btn"
          target="_blank"
          style="border: 1.5px solid #1e1e1e;background-color: #fff !important; color: #19154A;text-transform: capitalize;padding: 14px;display: inline-block;height: auto;border-radius: 50px;"
          variant="flat"
          >See all DevFest dates</v-btn
        >
      </v-col>
      <v-col md="5" sm="6" cols="12">
        <CoreCommunityMap/>
      </v-col>
    </v-row>
    <!-- <v-row justify-center align="center">
      <v-col md="12" sm="12" cols="12">
      <div v-if="chunkedUpcomingEvents.length > 0">
        <h3 style="text-align: center; color: #076EFF;">Upcoming Events</h3> 
        <v-carousel :show-arrows="true">
          <v-carousel-item v-for="(chunk, index) in chunkedUpcomingEvents" :key="index">
            <v-row align="center" justify="center" class="py-10">
              <v-col cols="12" sm="12" md="4" lg="4" v-for="(event, evIndex) in chunk" :key="evIndex">
                <v-card class="pa-10"
                  style="background: #000; border-color:#1f2023; border-width: 2px; border-radius: 60px; border-style: solid;">
                  <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(evIndex)}`"
                    style="border-radius: 60px;">
                    <h1><strong>{{ event.city }}</strong></h1>
                  </div>
                  <h2 class="text-white">On {{ getFormattedDate(event.date) }}</h2>
                  <h5 class="text-white">at {{ event.place }}</h5>
                  <div class="d-flex flex-column">
                    <v-btn large rounded dark :href="`${event.rsvp}`" target="_blank" style="
                      background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                      border-radius: 90px;
                      text-transform: capitalize;
                    " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                    </v-btn>
                    <v-btn dark large rounded outlined :href="`${event.link}`" target="_blank"
                      style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                        More</strong></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
  
      <div v-if="chunkedPastEvents.length > 0">
        <h3 style="text-align: center; color: #EA4355;">Past Events</h3>
        <v-carousel :show-arrows="true">
          <v-carousel-item v-for="(chunk, index) in chunkedPastEvents" :key="index">
            <v-row align="center" justify="center" class="py-10">
              <v-col cols="12" sm="12" md="4" lg="4" v-for="(event, evIndex) in chunk" :key="evIndex">
                <v-card class="pa-10"
                  style="background: #000; border-color:#1f2023; border-width: 2px; border-radius: 60px; border-style: solid;">
                  <div :class="`pa-5 mb-5 d-flex flex-column align-center ${getStyle(evIndex)}`"
                    style="border-radius: 60px;">
                    <h1><strong>{{ event.city }}</strong></h1>
                  </div>
                  <h2 class="text-white">On {{ getFormattedDate(event.date) }}</h2>
                  <h5 class="text-white">at {{ event.place }}</h5>
                  <div class="d-flex flex-column">
                    <v-btn large rounded dark :href="`${event.rsvp}`" target="_blank" style="
                      background: linear-gradient(145.24deg,#076eff 541.5%,#69a3ff 8780.84%);
                      border-radius: 90px;
                      text-transform: capitalize;
                    " class="py-7 px-4 mt-4 google-font"><strong>Register Now</strong>
                    </v-btn>
                    <v-btn dark large rounded outlined :href="`${event.link}`" target="_blank"
                      style="text-transform: capitalize;" class="mt-4 google-font"><strong>Learn
                        More</strong></v-btn>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
      </v-col>
    </v-row> -->
  </v-container>
</template>
  
<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { communitydata } = useJSONData();
import moment from "moment";

  
  const DATE_FORMAT = "DD/MM/YYYY";
  const DATE_DISPLAY_FORMAT = "D MMM YYYY";
  let CHUNK_SIZE = 2;
  // if(window.innerWidth < 998) {
  //   CHUNK_SIZE = 1;
  // }
  
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  
      function getStyle(indexNumber) {
        const styles = ["blue-head", "green-head", "red-head", "yellow-head"];
        return styles[indexNumber % styles.length];
      }
      function getFormattedDate(givenDate) {
        return moment(givenDate, DATE_FORMAT).format(DATE_DISPLAY_FORMAT);
      }
    const  upcomingEvent = communitydata.filter(event => moment(event.date, DATE_FORMAT).isAfter(moment(), "date"));
    const pastEvents = communitydata.filter(event => moment(event.date, DATE_FORMAT).isBefore(moment(), "date"));
    const chunkedUpcomingEvents = chunkArray(
        communitydata.filter(event => moment(event.date, DATE_FORMAT).isAfter(moment(), "date")),
        CHUNK_SIZE
      );
      const chunkedPastEvents = chunkArray(
        communitydata.filter(event => moment(event.date, DATE_FORMAT).isBefore(moment(), "date")),
        CHUNK_SIZE
      )
</script>
  
<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}
::v-deep .white-btn .v-btn__overlay{
  background: #fff;
}


/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}


</style>
  