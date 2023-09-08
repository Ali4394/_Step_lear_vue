
<script setup>

import Toast from 'primevue/toast';
// import { ref } from "vue";

import "primeicons/primeicons.css";

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>


<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button label="Show" @click="show()"  icon="pi pi-plus"/>
    </div>
</template>

