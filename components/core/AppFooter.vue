<template>
  <v-container class="px-5 mt-8">
    <v-row
      justify-center
      align="center"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <v-col sm="12" md="4" cols="12">
        <h2>{{ mainData.communityName }}</h2>

        <p>Designed and developed by the Community</p>
      </v-col>
      <v-col sm="12" md="8" cols="12" style="display: flex;justify-content: flex-end;">
        <a
          href="https://developers.google.com/community/gdg"
          target="_blank"
          rel="noreferrer"
          aria-label="link"
          class="grey--text text--darken-3 mr-6 google-font"
          style="text-decoration: none; color: black;font-size: 70%"
          >GDG Program</a
        >
        <br class="hidden-md-and-up" />
        <a
          href="https://www.womentechmakers.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="link"
          class="grey--text text--darken-3 mr-6 google-font"
          style="text-decoration: none; color: black;font-size: 70%"
          >WTM Program</a
        >

        <br class="hidden-md-and-up" />
        <router-link
          to="/faq"
          rel="noreferrer"
          aria-label="link"
          class="mr-6 google-font grey--text text--darken-3"
          style="text-decoration: none; color: black;font-size: 70%"
          >FAQ</router-link
        >
        <br class="hidden-md-and-up" />
        <router-link
          to="/coc"
          style="text-decoration: none; color: black;font-size: 70%"
          rel="noreferrer"
          aria-label="link"
          class="mr-6 google-font grey--text text--darken-3"
          >Code of conduct</router-link
        >
        <br class="hidden-md-and-up" />
        <a
          href="https://developers.google.com/community-guidelines"
          target="_blank"
          rel="noreferrer"
          aria-label="link"
          class="mr-6 google-font grey--text text--darken-3"
          style="text-decoration: none; color: black;font-size: 70%"
          >Community Guidelines</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style></style>
