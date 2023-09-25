<template>
  <div>
    <img
      style="width: 220px; height: 180px"
      src="../assets/car-removebg.png"
      alt="Car Image"
      class="car-animation"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.car-animation {
  width: 150px; /* Adjust the width based on your image */
  height: auto; /* Adjust the height based on your image */
  animation: moveCar 5s linear infinite alternate; /* Adjust animation properties as needed */
}

@keyframes moveCar {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(160%); /* Adjust the distance of the animation */
  }
}
</style>
