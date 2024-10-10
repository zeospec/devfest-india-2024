<template>
  <v-container fluid class="mx-3 pt-0">
    <v-row
      justify-center
      align="center"
    >
      <!-- <v-col cols="12" md="2" sm="12" order-md="1" order="2" order-sm="1" class="pa-0">
        <v-img
          alt="image"
          class="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex"
          src="/assets/img/element1.svg"
        ></v-img>
        <v-img
          alt="image"
          class="d-flex d-sm-none d-md-none d-lg-none d-xl-none"
          src="/assets/img/element3.svg"
        ></v-img>
      </v-col> -->

      <v-col cols="12" md="12" sm="12" order-md="2" order="1" order-sm="2" class="pt-0 px-0">
        <v-container fluid class="pl-0 pr-0">
          <v-row>
            <v-col
              md="3"
              sm="3"
              cols="6"
              class="stats-container pt-0"
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(25, 21, 74)'
              }"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <h1 class="responsive-title">{{ item.value }}</h1>
              <p>
                {{ item.name }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style scoped>
.responsive-title {
  font-size: 180%;
  font-weight: 600;
}
.stats-container {
  background-size: 75%;
}

@media (max-width: 1140px) {
  .responsive-title {
    font-size: 250%;
  }
  .stats-container {
    background-size: 85%;
  }
}

@media (max-width: 860px) {
  .responsive-title {
    font-size: 180%;
  }
}
@media (max-width: 600px) {
  .responsive-title {
    font-size: 250%;
  }
  .stats-container {
    background-size: 75%;
  }
}
@media (max-width: 460px) {
  .responsive-title {
    font-size: 180%;
  }
  .stats-container {
    background-size: 80%;
  }
}
@media (min-width: 960px) {
    .v-col-md-3 {
        max-width: 20%;
    }
}
</style>
