<template>
  <v-container fluid>
    <v-row>
      <v-col md="8">
        <h1>Frequently asked questions</h1>
        <p>Need Answers? Everything you need to know</p>

        <v-expansion-panels
          class="mb-6 mt-10"
          rounded="12"
          bg-color="white"
          flat
          style="
            border-radius: 20px !important;
            /* border-bottom: 1px solid black; */
            overflow: hidden;
          "
          variant="accordion"
        >
          <!-- :style="{ borderBottom: i<3?'1px solid black':'', borderTop: i!=0?'1px solid black':'' }" -->
          <v-expansion-panel
            v-for="(item, index) in faqData"
            :key="index"
            :style="{
              borderBottom: index + 1 < faqData.length ? '1px solid black' : '',
            }"
          >
            <v-expansion-panel-title
              expand-icon="mdi-menu-down"
              style="background-color: white"
            >
              {{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-3">
              <div v-html="item.answer"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { faqData, mainData } = useJSONData();

definePageMeta({
  layout: "default",
});

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "FAQ | Google Developers Group India",
  description: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogLocale:'en_US',
  keywords: "GDG, DevFest, Google, DevFest",
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "FAQ | Google Developers Group India",
  ogDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogImage: `https://devfest.gdgindia.dev/thumbnail.jpg`,
  ogUrl: "https://devfest.gdgindia.dev/",
  ogType: "website",
  twitterTitle: "FAQ | Google Developers Group India",
  twitterDescription: "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  twitterImage: `https://devfest.gdgindia.dev/thumbnail.jpg.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
</style>
