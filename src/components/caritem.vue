<script setup>
const car = defineProps({
  car: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="car">
    <img :src="car.car.image" alt="car" />
    <h2>{{ car.car.brand }}</h2>
    <p>Цена: {{ car.car.price }}</p>
    <p>Год выпуска: {{ car.car.year }}</p>
    <p>Объем двигателя: {{ car.car.volume }}</p>
    <p>Цвет: {{ car.car.color }}</p>
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
.car img{
  width: 400px;
  height: 230px;
}
</style>
