<template>
  <div class="carInfo" v-if="auto">
    <img class="img" :src="auto.image" alt="car" />
    <Card>
      <template #title>{{ auto.brand }} </template>
      <template #content>
        <p>Объем двигателя: {{ auto.volume }}</p>

        <P>Цвет: <ColorPicker v-model="auto.color" /></P>

        <p>Цена: {{ auto.price }} KZT</p>
        <div class="btn">
          <Button style="margin: 5px" label="BUY" severity="info" />
          <Button
            style="margin: 5px"
            label="LIKE"
            @click="addLike"
            severity="success"
          ></Button>
          <p>{{ likes }}</p>
          <Button
            style="margin: 5px"
            label="DISLIKE"
            @click="addDislike"
            severity="secondary"
          ></Button>
          <p>{{ dislikes }}</p>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { useAuto } from "../composable/useAuto";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Card from "primevue/card";
import Button from "primevue/button";
import { ref } from "vue";
import ColorPicker from "primevue/colorpicker";

const router = useRouter();

const { auto, getAuto } = useAuto();

onMounted(async () => {
  await getAuto(useRoute().params.id);
});

const likes = ref(0);
const dislikes = ref(0);

const addLike = () => {
  likes.value += 1;
};

const addDislike = () => {
  dislikes.value += 1;
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
}

.img {
  width: 400px;
  height: 300px;
}

.carInfo{
  width: 700px;
  height: 650px;
  border: 2px gray solid;
  margin: 30px;
}
</style>
