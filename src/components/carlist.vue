<script setup>
import carItem from "@/components/caritem.vue";
import { defineProps } from "vue";

defineProps({
    cars:{
        type:Array,
        required: true,
    }
})
</script>

<template>
  <section class="cars" v-for="car in cars" :key="car">
    <carItem :car="car" />
  </section>
</template>

<style scoped></style>
