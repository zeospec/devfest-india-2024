<template>
  <div>
    <iframe
      v-show="!loading"
      @load="load"
      src="https://www.google.com/maps/d/embed?mid=1F9Lyn8xgdMJwGUWr-BC1rjKVVeZTlv3A&z=4"
      width="100%"
      height="400"
      style="border-radius: 20px; border: 2px solid black"
    ></iframe>
  </div>
</template>

<script setup>
const loading = ref(true);
const load = () => (loading.value = false);
</script>

<style scoped>
.custom-shape {
  width: 100%;
  background-color: lightblue;
  border: 1px solid black !important;
  clip-path: polygon(
    50% 0%,    /* Top point */
    79% 7%,    /* Top-right */
    93% 25%,   /* Right-top */
    100% 50%,  /* Right */
    93% 75%,   /* Right-bottom */
    79% 93%,   /* Bottom-right */
    50% 100%,  /* Bottom */
    21% 93%,   /* Bottom-left */
    7% 75%,    /* Left-bottom */
    0% 50%,    /* Left */
    7% 25%,    /* Left-top */
    21% 7%     /* Top-left */
  ); /* Diamond shape */
}
</style>