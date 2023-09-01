<script setup>
import { defineProps, computed } from 'vue';


const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});

const carRemake = computed(() => {
  return {
    ...props.car,
    price: props.car.price + ' ₽',
    kpd: props.car.price/props.car.year
  }
})

function changeColor(color){
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']

  if(crappyColors.includes(color)){
    return true;
  }
  return false;
}
</script>

<template>
  <div class="car">
    <img :src="carRemake.image" alt="car" />
    <h2>{{ carRemake.brand }}</h2>
    <p>Цена: {{carRemake.price }}</p>
    <p>Год выпуска: {{ carRemake.year }}</p>
    <p>KPD: {{ carRemake.kpd }}</p>
    <p>Объем двигателя: {{ carRemake.volume }}</p>
    <p :style="`color: ${carRemake.color }`">Цвет: {{ carRemake.color }}</p>
    <div class="chipes">
    <span v-if="Number(carRemake.price.slice(0, -1))> 1900000">Very expensive</span>
    <!-- <span v-else-if="Number(carRemake.price.slice(0, -1))= 1000000">ok</span> -->
    <span v-else>podumai</span>
    <span v-if="Number(carRemake.year)> 2018">New car</span>
    <span v-if="changeColor(carRemake.color)">Bad color</span>
  </div>
  </div>
</template>

<style scoped>
.car{
  display: flex;
  justify-content: center;
  margin-left: 200px;
  margin-top: 100px;
  flex-direction: column;

}
.chipes span{
  margin:5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
}
.car img{
  width: 400px;
  height: 230px;
}
</style>
