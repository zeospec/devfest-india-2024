<template>
  <v-app style="background-color: #FAF9F9" class="google-font">
    <CoreAppToolbar />
    <ClientOnly>
      <CoreAppDrawer />
    </ClientOnly>
    <v-main
      class="mt-md-15 mt-sm-10 mt-5"
      style="max-width: 1240px; margin-left: auto; margin-right: auto"
    >
      <slot></slot>
    </v-main>
    <CoreAppFooter />
  </v-app>
</template>

<script setup>
</script>
