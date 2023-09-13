import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/firebases";
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref, computed } from "vue";
// import { cre } from "@firebase/util";
import {createid} from "@/services/"
import { formatDate } from "../services/methods";
 @/services/methods;


// function createid(){
//   return new Date().getTime().toString()
// }

export const useAuto = () => {
  const newAuto = ref({
    id:createid(),
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: null,
    saled: false,
  });
  const autoList = ref([]);
  const auto = ref(null);

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  });



  const autoListRemake = computed(() => {
    const _autoListRemake = autoList.value.map((auto) => {
      auto.price =` ${parseInt(auto.price)} KZT`
      auto.volume = `${auto.volume} л`
      auto.travel =` ${auto.travel} км`
      auto.year = formatDate(auto.year)
      auto.age = `${new Date().getFullYear() - auto.year}г`
      auto.color = `#${auto.color}`
      return auto
    })
    return _autoListRemake || []
  })


  async function createAuto() {
    loading.value.newAuto = true;

    try {
      await addDoc(collection(db, "autos"), newAuto.value).then( async() => {
        await getAutoList()
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  async function getAutoList() {
    loading.value.autoList = true;
    try {
      const querySnapshot = await getDocs(collection(db, "autos"));
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data());
      });
    } catch (e) {
      console.error("Error: ", e);
    } finally {
      loading.value.autoList = false;
    }
  }



  function clear() {
    newAuto.value = {
      id:createid(),
      brand: '',
      price: '',
      year: '',
      volume: '',
      color: '',
      city: '',
      carcase: '',
      gear: '',
      travel: 0,
      image: null,
      saled: false,
    }
    autoList.value = []
    auto.value = null
  }



  
  return {
    createAuto,
    getAutoList,
    auto,
    clear,
    autoListRemake,
    loading,
    newAuto,
    
  };
};
