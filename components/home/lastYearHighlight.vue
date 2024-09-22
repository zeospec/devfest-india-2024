<template>
  <v-container fluid>
    <v-row class="mb-0">
      <v-col md="12" sm="12" cols="12">
        <h1>What last year's highlights</h1>
        <iframe
              style="width:100%; height: 620px; border: 1.5px solid black; border-radius:20px;margin-top:20px"
              :src="`${mainData.eventInfo.lastYearHighlight.embedLink}`" 
              :title="`${mainData.eventInfo.lastYearHighlight.videoTitle}`" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
        </iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
const colors = ref(["#C3ECF6", "#F8D8D8", "#FFE7A5", "#CCF6C5"]);
</script>

