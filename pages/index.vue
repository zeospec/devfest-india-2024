<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <v-row>
        <!-- Hero -->
        <HomeHeroSection class="my-0 mb-md-10" />
        <!-- Hero -->

        <!-- Stats -->
        <HomeStats class="my-0 my-md-5" />
        <!-- Stats -->

        <!-- FindAnEvent -->
        <HomeFindEvent class="my-0 my-md-5" />
        <!-- FindAnEvent -->

        <!-- Whats New -->
        <HomeExpectionSection class="mt-md-10" />
        <!-- Whats New -->

        <!-- Technologies -->
        <HomeTechSection class="mb-md-10" />
        <!-- Technologies -->

        <!-- Last Year Highlights -->
        <HomeLastYearHighlight class="mb-md-10" />
        <!-- Last Year Highlights -->

        <!-- Past DevFest -->
        <!-- <HomePastDevFest class="mb-md-10" /> -->
        <!-- Past DevFest -->

        <!-- Sponsors -->
        <!-- <HomeSponsorsSection /> -->
        <!-- Sponsors -->

        <!-- Keep in Touch -->
        <HomeCommunityContact />
        <!-- Keep in Touch -->
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { mainData } = useJSONData();
definePageMeta({
  layout: false,
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "DevFest India 2024 | Google Developers Group India",
  description: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogLocale:'en_US',
  keywords: "GDG, DevFest, Google, DevFest",
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "DevFest India 2024 | Google Developers Group India",
  ogDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogImage: `https://devfest.gdgindia.dev/thumbnail.jpg`,
  ogUrl: "https://devfest.gdgindia.dev/",
  ogType: "website",
  twitterTitle: "DevFest India 2024 | Google Developers Group India",
  twitterDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  twitterImage: `https://devfest.gdgindia.dev/thumbnail.jpg.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
