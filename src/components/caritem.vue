<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';



const props = defineProps({
  auto: {
    type: Object,
    required: true,
  },
});



function changeColor(color){
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']

  if(crappyColors.includes(color)){
    return true;
  }
  return false;
}
</script>

<template>
  <div class="card">
  <card>
    <template #header > <img class="img" :src="auto.image" alt="car" /></template>
    <template #title>{{ auto.brand }}</template>
    <template #content>
  <!-- <div class="car"> -->
   
    <!-- <h2>{{ carRemake.brand }}</h2> -->
    <p>Цена: {{auto.price }}</p>
    <p>Год выпуска: {{ auto.year }}</p>
    <p>KPD: {{ auto.kpd }}</p>
    <p>Объем двигателя: {{ auto.volume }}</p>
    <p :style="`color: ${auto.color }`">Цвет: {{auto.color }}</p>
  </template>
  <template #footer>
    <div class="chipes">
      <Chip v-if="Number(auto.price.slice(0, -1))> 1900000" label="Very expensive" icon="pi pi-dollar" />
  
    <!-- <span v-else-if="Number(carRemake.price.slice(0, -1))= 1000000">ok</span> -->
    <!-- <span v-else>podumai</span> -->
    <Chip style="margin:10px;" v-if="Number(auto.year)> 2018" label="New car" icon="pi pi-car" />
    <!-- <span v-if="Number(carRemake.year)> 2018">New car</span> -->
    <Chip v-if="changeColor(auto.color)" label="Bad color" icon="pi pi-wrench" />
    <!-- <span v-if="changeColor(carRemake.color)">Bad color</span> -->
  </div>
</template>
  <!-- </div> -->
</card>
</div>
</template>
<style scoped>


.card{
  display: flex;
  margin: 10px;

}




.img{

max-width: 250px;
min-width: 50px;
max-height: 350px;
min-height: 200px;
}

</style>


