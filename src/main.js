import "./assets/main.css";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-dark-indigo/theme.css"; 
import "primevue/resources/primevue.min.css";
import Menubar from "primevue/menubar";
import ToastService from "primevue/toastservice";
// import 'primeicons/primeicons.css'

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Card from 'primevue/card';
import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD_smXIAA5JLL26m7ij32yoh_nKcuwGAUc",
  authDomain: "vue-project-e9928.firebaseapp.com",
  projectId: "vue-project-e9928",
  storageBucket: "vue-project-e9928.appspot.com",
  messagingSenderId: "862302655764",
  appId: "1:862302655764:web:ac642b2c4d6a71d9e65e01",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.component('Card', Card);
app.use(ToastService);
app.use(router);
app.use(PrimeVue);
app.use(Menubar);

app.mount("#app");
