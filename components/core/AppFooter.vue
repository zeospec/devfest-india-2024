<template>
  <v-container class="mt-8">
    <v-row justify-center align="center">
      <v-col sm="12" md="4" cols="12" class="footer-title">
        <h3>{{ mainData.communityName }}</h3>
        <p>Designed and developed by the Community</p>
      </v-col>
      <v-col
        sm="12"
        md="8"
        cols="12"
        class="footer-link-container"
      >
        <a
          href="https://developers.google.com/community/gdg"
          target="_blank"
          rel="noreferrer"
          aria-label="link"
          class="grey--text text--darken-3 mr-6 google-font"
          style="text-decoration: none; color: black; font-size: 80%"
          >GDG Program</a
        >
        <br class="hidden-md-and-up" />
        <a
          href="https://www.womentechmakers.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="link"
          class="grey--text text--darken-3 mr-6 google-font"
          style="text-decoration: none; color: black; font-size: 80%"
          >WTM Program</a
        >

        <br class="hidden-md-and-up" />
        <router-link
          to="/faq"
          rel="noreferrer"
          aria-label="link"
          class="mr-6 google-font grey--text text--darken-3"
          style="text-decoration: none; color: black; font-size: 80%"
          >FAQ</router-link
        >
        <br class="hidden-md-and-up" />
        <router-link
          to="/coc"
          style="text-decoration: none; color: black; font-size: 80%"
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
          class="google-font grey--text text--darken-3"
          style="text-decoration: none; color: black; font-size: 80%"
          >Community Guidelines</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style>
.footer-title {
  text-align: left;
}
.footer-link-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 0;
}

@media (max-width: 960px) {
  .footer-link-container {
    justify-content: center;
  }

  .footer-title {
    text-align: center;
  }
}
</style>
