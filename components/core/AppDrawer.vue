<template>
  <v-navigation-drawer
    v-model="sidebar"
    app
    floating
    temporary
    location="bottom"
  >
    <v-list-item
      class="py-4"
      :title="'DevFest ' + mainData.communityLocation.city"
      :subtitle="mainData.communityName"
    ></v-list-item>
    <v-divider></v-divider>

    <v-list-item
      v-for="(item, index) in navbarData"
      :key="index"
      link
      :title="item.name"
      :to="item.path"
      class="list"
    ></v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
const { mainData, navbarData } = useJSONData();
const sidebar = useSideBar();
</script>

<style>
::v-deep v-list-item .v-btn--active  {
  text-transform: capitalize;
    background-color: #f9fafa !important;
    opacity: 1;
    font-weight: 800;
}
::v-deep v-list-item .v-toolbar {
  border: 2px solid #000;
}
</style>
