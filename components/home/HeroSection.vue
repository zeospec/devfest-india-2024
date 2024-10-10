<template>
  <v-container fluid class="mx-4 px-md-15 py-md-8 pa-3 bg-white" style="border: 2px solid black; border-radius: 48px;">
    <v-row justify-center align="center" class="mobile-none">
      <v-col md="6" sm="6" cols="12" class="d-flex">
       <div class="vectorimg">
        <v-img
          alt="logo"
          src="assets/img/Vector.svg"
          lazy-src="assets/img/Vector.svg"

        ></v-img>
       </div>
      <div class="gdglogo"> 
        <div style="width: 60%;">
          <v-img
          alt="logo"
          src="assets/img/gdglogo.svg"
          lazy-src="assets/img/gdglogo.svg"

        ></v-img>
        </div>
          <h1 class="responsive-h1 my-4 pt-4">
            <!-- <span style="font-size: 170%;color:#19154A">DevFest</span><br /> -->
            <v-img
          alt="logo"
          src="assets/img/devfesttext.svg"
          lazy-src="assets/img/devfesttext.svg"

        ></v-img>
             <span style="display: block;padding-top: 10px; font-weight: 500;">{{ mainData.communityLocation.city }} 2024</span>
        </h1>
        </div>
      </v-col>
      <v-col md="6" sm="6" cols="12" class="d-flex">
          <div class="mr-8">
            <v-img
          alt="logo"
          src="assets/img/gdgarrow.svg"
          lazy-src="assets/img/gdgarrow.svg"

        ></v-img>
        <div class="space-wrapper">
          <p class="" :style="{ maxWidth: '100%' }">
          {{ mainData.eventInfo.description.short }}
        </p>

        <p class="my-5">
          <span class="mr-4">
            <v-icon class="mr-1">mdi-calendar-blank</v-icon>
            {{ mainData.eventInfo.date }}
          </span>

          <!-- <span class="mr-4">
            <v-icon class="mr-1">mdi-map-legend</v-icon>
            <a :href="mainData.eventInfo.venue.map_link" target="_blank" style="color:black">
              {{ mainData.eventInfo.venue.address }}
            </a>
            
          </span> -->
        </p>

        <v-btn
          rounded
          size="large"
          color="#FFD427"
          to="/events"
          class="my-4 mt-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black;text-transform: capitalize;font-weight:600;font-size: 16px;"
          variant="flat"
          >Find a DevFest near you</v-btn
        >
        </div>
            
          </div>
        <v-img
          alt="logo"
          src="assets/img/Vectorright.svg"
          lazy-src="assets/img/Vectorright.svg"
          class="vectorimg"
        ></v-img>

      </v-col>
    </v-row>
    <v-row justify-center align="center" class="desktop-none">
      <v-col md="12" sm="12" cols="12">
        <v-img
          alt="logo"
          src="assets/img/gdgarrow.svg"
          lazy-src="assets/img/gdgarrow.svg"

        ></v-img>
        <v-img
          alt="logo"
          src="assets/img/gdglogo.svg"
          lazy-src="assets/img/gdglogo.svg"
          style="width: 50%;"

        ></v-img>
        <div class="d-flex">
          <v-img
          alt="logo"
          src="assets/img/Vector.svg"
          lazy-src="assets/img/Vector.svg"
          style="width: 10%;"

        ></v-img>
        <div>
          <h1 class="responsive-h1 my-4 pt-4">
            <!-- <span style="font-size: 170%;color:#19154A">DevFest</span><br /> -->
            <v-img
          alt="logo"
          src="assets/img/devfesttext.svg"
          lazy-src="assets/img/devfesttext.svg"

        ></v-img>
             <span style="display: block;padding-top: 10px; font-weight: 500;">{{ mainData.communityLocation.city }} 2024</span>
        </h1>
        </div>
        <v-img
          alt="logo"
          src="assets/img/Vectorright.svg"
          lazy-src="assets/img/Vectorright.svg"
          style="width: 10%;"
        ></v-img>
        </div>

        <div class="space-wrapper ">
          <p class="" :style="{ maxWidth: '100%' }">
          {{ mainData.eventInfo.description.short }}
        </p>

        <p class="my-5">
          <span class="mr-4">
            <v-icon class="mr-1">mdi-calendar-blank</v-icon>
            {{ mainData.eventInfo.date }}
          </span>
        </p>

        <v-btn
          rounded
          size="small"
          color="#FFD427"
          v-if="
            mainData.eventInfo &&
            mainData.eventInfo.registeration.link.length &&
            new Date(mainData.eventInfo.registeration.end_date) > new Date()
          "
          :href="mainData.eventInfo.registeration.link"
          class="my-4 mt-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: #19154A;text-transform: capitalize;font-weight:600;width: 100%;font-size: 16px !important;"
          variant="flat"
          >Find a DevFest near you</v-btn
        >
        </div>
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
.vectorimg {
  width: 25%;

}
.gdglogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.desktop-none {
    display:none;
  }
  .mobile-none {
    display:flex;
  }
  .space-wrapper {
    padding-top: 140px !important;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}
@media (max-width: 668px) {
  .desktop-none {
    display:flex;
  }
  .mobile-none {
    display: none;
  }
  .space-wrapper {
    padding-top: 40px !important;
}
}
</style>
