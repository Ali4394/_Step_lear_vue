<script setup>
import Sidebar from "primevue/sidebar";
import { ref } from "vue";
import "primeicons/primeicons.css";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";

const visible = ref(false);
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
      <h2>Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <i class="pi pi-user"></i>
        </span>
        <InputText placeholder="Username" />
      </div>

      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">$</span>
        <InputNumber placeholder="Price" />
        <span class="p-inputgroup-addon">.00</span>
      </div>

      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">www</span>
        <InputText placeholder="Website" />
      </div>
    </Sidebar>
    <button
      class="btn"
      title="Panel"
      icon="pi pi-arrow-right"
      @click="visible = true"
    >
      <i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>Panel
    </button>
  </div>
</template>

<style scoped>
.btn {
  width: 50px;
  height: 50px;
}
</style>
