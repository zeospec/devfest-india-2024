<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <v-card
        v-bind="activatorProps"
        ripple
        @click="dialog = true"
        flat
        class="px-2 py-2 google-font"
        rounded="lg"
        style="
          border-radius: 45px !important;
          border: 2px solid #1f2023 !important;
        "
      >
        <div class="d-flex pt-4">
          <v-img alt="image" class="mr-8" src="/assets/img/gdglogo.svg"></v-img>
          <v-img alt="image" src="/assets/img/extra/gdgtext.svg"></v-img>
        </div>
        <div class="d-flex">
          <v-img
            alt="logo"
            src="assets/img/Vector.svg"
            lazy-src="assets/img/Vector.svg"
          ></v-img>
          <div>
            <h1 class="responsive-h1">
              <span style="font-size: 170%; color: #19154a">DevFest</span><br />
              <span
                style="
                  display: block;
                  font-weight: 500;
                  font-size: 30px;
                  text-align: center;
                  color: #19154a;
                "
                >{{ item.City }}</span
              >
            </h1>
          </div>
          <v-img
            alt="logo"
            src="assets/img/Vectorright.svg"
            lazy-src="assets/img/Vectorright.svg"
            class="vectorimg"
          ></v-img>
        </div>
        <v-card-title>
          <div>
            <p class="mt-n2 pt-2" style="font-size: 70%">
              {{ getDate(item.StartingDate) }}
            </p>
          </div>

          <v-btn
            rounded
            color="#FDD562"
            variant="flat"
            class="mt-4"
            style="
              border: 1.5px solid #1e1e1e;
              color: black;
              text-transform: capitalize;
            "
            >See More Info</v-btn
          >
        </v-card-title>
      </v-card>
    </template>
    <v-card class="pa-2" rounded="xl">
      <v-container fluid>
        <v-row>
          <v-col>
            <h1>{{ item.DevFestName }}</h1>
            <h2>{{ item.CommunityName }}</h2>

            <p>Date: {{ getDate(item.StartingDate) }}</p>
            <p>Venue: {{ item.Venue }}</p>

            <p class="my-4">{{ item.Description }}</p>

            <p class="mb-0">Call For Presentations</p>
            <a
              v-if="new Date(item.CFP.LastDate) >= new Date()"
              color="red"
              style="font-size: 17px; text-decoration: underline"
              :href="item.CFP.Link"
              >{{ `Apply now by ${getDate(item.CFP.LastDate)}` }}</a
            >
            <a v-else class="disabled">Not accepting proposals anymore</a>
            <br />
            <br />
            <v-btn
              rounded
              variant="flat"
              color="primary"
              class="mt-4"
              v-if="item.EventLink.length"
              :href="item.EventLink"
              target="_blank"
            >
              <v-icon start>mdi-open-in-new</v-icon>
              Event Link</v-btn
            >

            <v-btn
              rounded
              variant="tonal"
              color="primary"
              class="mt-4 mx-3"
              target="_blank"
              @click="dialog = false"
            >
              Close</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
      
<script setup>
// Props
defineProps({
  item: Object,
});
const dialog = ref(false);

const getDate = (d) => {
  var date = new Date(d).toString().split("GMT");
  date = date[0].split(" ");
  return date[1] + " " + date[2] + ", " + date[3];
};
</script>
      
      <style>
</style>
