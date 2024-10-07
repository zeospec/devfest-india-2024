<template>
  <v-container fluid class="">
    <v-row justify-center align="center">
      <v-col md="7" sm="6" cols="12">
        <h1 class="responsive-h1 my-4">
          Find lastest <br />
          upcoming Devfest
        </h1>

        <!-- <v-text-field
          rounded
          variant="outlined"
          max-width="480"
          density="compact"
          class="mt-6"
          placeholder="Search for event in your city"
          append-inner-icon="mdi-magnify"
        ></v-text-field> -->
        <p>
          Dive deep into the latest trends and innovations through talks,
          workshops, and more. It's a day filled with learning, networking, and
          inspiring ideas
        </p>
        <v-btn
          rounded
          color="#4284F3"
          to="/badge"
          size="large"
          class="my-2 mt-3 mr-3"
          style="
            border: 1.5px solid #1e1e1e;
            color: black;
            text-transform: capitalize;
          "
          variant="flat"
          ><span class="pr-2"> Get the DevFest Badge </span
          ><img src="/assets/img/lucide_badge.svg" />
        </v-btn>
        <v-btn
          rounded
          color="#fff"
          to="/events"
          size="large"
          class="my-2 mt-3 mr-3 white-btn"
          style="
            border: 1.5px solid #1e1e1e;
            background-color: #fff !important;
            color: #19154a;
            text-transform: capitalize;
          "
          variant="flat"
          >See all DevFest dates</v-btn
        >
      </v-col>
      <v-col md="5" sm="6" cols="12">
        <CoreCommunityMap />
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
</script>
  
<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}
::v-deep .white-btn .v-btn__overlay {
  background: #fff;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}
</style>
  