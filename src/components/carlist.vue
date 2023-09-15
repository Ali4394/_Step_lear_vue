<script setup>
import carItem from "@/components/caritem.vue";
import {onMounted } from "vue";
import {useAuto} from '@/composable/useAuto';


const { autoListRemake, getAutoList,} = useAuto();

onMounted(async() => {
  await getAutoList();
});


</script>

<template>
  <section class="cars" v-for="auto in autoListRemake" :key="auto">
    <carItem :auto="auto" />
  </section>
</template>

<style scoped></style>
