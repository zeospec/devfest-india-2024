<template>
        <div
          v-on="on"
          v-bind="attrs"
          style="
            cursor: pointer;
            background: white;
            border-radius: 45px;
          "
          class="py-n5 ma-0"
        >
          <v-card ripple flat class="px-2 py-2 google-font" rounded="lg" style="border-radius:45px !important;border: 2px solid #1F2023 !important;">
            <!-- <v-img
              :src="'/assets/img/devfest-cover.svg'"
              :lazy-src="'/assets/img/devfest-cover.svg'"
              :alt="item.DevFestName"
              position="left"
              height="140px"
              class="white--text align-center"
            >
              <p class="mt-15 float-left ml-6" style="font-size:14px">{{ item.City }}</p>
            </v-img> -->
            <img src="/assets/img/devfest-cover.svg" alt="" style="width: 100%;" />
            <!-- <p class="mt-15 float-left ml-6" style="font-size:14px">{{ item.City }}</p> -->
            <v-card-title>
              <div>
                <span style="color: #19154A;font-weight: 600;">{{ item.DevFestName }}</span>
                <p class="mt-n2 pt-2" style="font-size: 70%">
                  <!-- <v-icon class="ml-0" small>mdi-calendar-month</v-icon> -->
                  {{ getDate(item.StartingDate) }}
                </p>
              </div>
            </v-card-title>
            <!-- <v-card-subtitle class="mt-n9">
              <div>
                <v-icon small>mdi-calendar-month</v-icon>
                {{ getDate(item.StartingDate) }}
              </div>
            </v-card-subtitle> -->
  
            <v-card-actions class="mt-n8 pt-8">
              <!-- <v-btn color="primary" text> 
                See More </v-btn> -->
                <v-btn
          rounded
          color="#FDD663"
          class="my-2 mt-3 mr-3"
          target="_blank"
          style="border: 1.5px solid #1F2023; color: #19154A;text-transform: capitalize;padding: 14px;display: inline-block;height: auto;border-radius: 50px;"
          variant="flat"
          ><span> Register Now </span>
          </v-btn
        >
            </v-card-actions>
          </v-card>
        </div>
  </template>
      
      <script>
  export default {
    props: ["item"],
    data: () => ({
      dialog: false,
    }),
    methods: {
      getDate(d) {
        var date = new Date(d).toString().split("GMT");
        date = date[0].split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
      },
    },
  };
  </script>
      
      <style>
  </style>
