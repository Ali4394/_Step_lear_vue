<script setup>

import Toast from 'primevue/toast';
import { ref } from "vue";
import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);

import { useToast } from 'primevue/usetoast';

const toast = useToast();
</script>
<template>
    <Toast />
    <Button label="Show" @click="show(true)" />
</template>