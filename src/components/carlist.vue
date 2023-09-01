<script setup>
import carItem from "@/components/caritem.vue";

const carsArray = [
  {
    brand: "BMW",
    price: "2000000",
    year: 2020,
    volume: 2.4,
    color: "#00FF00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYgsB_iywqC-ZvH34lxMNAmcz5X5XNrLQug&usqp=CAU",
  },
];
</script>

<template>
  <section class="cars" v-for="car in carsArray" :key="car.brand">
    <carItem :car="car" />
  </section>
</template>

<style scoped></style>
