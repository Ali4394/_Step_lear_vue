<script setup>
import carItem from "@/components/caritem.vue";
import {onMounted } from "vue";
import {useAuto} from '@/composable/useAuto';
import { useRouter, useRoute } from "vue-router";


const router = useRouter()


const { autoListRemake, getAutoList,} = useAuto();

onMounted(async() => {
  await getAutoList();
});

function goToCarUrl(id){
  router.push(`/car/${id}`)
}

</script>

<template>
  <div class="card">
  <section class="cars" v-for="auto in autoListRemake" :key="auto">
    <carItem :auto="auto" @click="goToCarUrl(auto.id)"/>
  </section>
</div>
</template>

<style scoped>
.card{
  display: flex;
  justify-content: center;
}
.cars{
  max-height: 300px;

}
</style>
