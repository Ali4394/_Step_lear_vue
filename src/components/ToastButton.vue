<template>
  <div class="card flex justify-content-center">
    <Toast />
    <button label="Show" @click="show()">TOAST SWOW</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const show = () => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 3000,
  });
};

const showWarn = () => {
  toast.add({
    severity: "warn",
    summary: "Warning",
    detail: "Warning Content",
    life: 3000,
  });
};
onMounted(() => {
  showWarn();
});
</script>
