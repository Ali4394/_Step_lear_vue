// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_smXIAA5JLL26m7ij32yoh_nKcuwGAUc",
  authDomain: "vue-project-e9928.firebaseapp.com",
  projectId: "vue-project-e9928",
  storageBucket: "vue-project-e9928.appspot.com",
  messagingSenderId: "862302655764",
  appId: "1:862302655764:web:ac642b2c4d6a71d9e65e01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
