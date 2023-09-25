<template>
  <div class="container">
    <div class="card">
      <Menubar v-model:activeIndex="active" :model="items">
        <template #item="{ label, item, props }">
          <router-link
            v-if="item.route"
            v-slot="routerProps"
            :to="item.route"
            custom
          >
            <a
              :href="routerProps.href"
              v-bind="props.action"
              @click="($event) => routerProps.navigate($event)"
            >
              <span v-bind="props.icon" />
              <span v-bind="props.label">{{ label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
      <router-view />
    </div>
    <div class="btns">
      <div class="side">
        <button
          v-if="!user"
          type="button"
          class="p-link p-ml-auto btn"
          @click="googleLogin"
        >
          Login <i class="pi pi-user"></i>
        </button>
        <button
          v-else
          type="button"
          class="p-link p-ml-auto btn"
          @click="logout"
        >
          Logout <i class="pi pi-user"></i>
        </button>
      </div>

      <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
          <h2>Your Feedback</h2>
          <p>
            Leave your feedback here or ask a question, and we will get in touch
            with you soon!
          </p>

          <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Your Name</label>
          </span>
          <div class="flex-auto">
            <label for="phone"></label>
            <InputMask
              v-model="value2"
              date="phone"
              mask="+7(999) 999-9999"
              placeholder="+7(705) 111-1234"
            />
          </div>
          <span class="p-float-label">
            <InputText id="comment" v-model="comment" />
            <label for="comment">Your Feedback or Question</label>
          </span>
          <Button type="submit" label="Send" @click="handleSubmit" />
        </Sidebar>
        <Button @click="visible2 = true" icon="pi pi-plus" label="Add Car" />
        <Button class="btn" @click="visible = true"
          >Leave Feedback <i class="pi pi-star"></i
        ></Button>

        <Dialog
          v-model:visible="visible2"
          modal
          header="Add a Car"
          :style="`width: '50vw'`"
        >
          <template #default>
            <div class="p-fluid">
              <div class="p-field">
                <label for="brand">Brand</label>
                <Dropdown
                  id="brand"
                  v-model="newAuto.brand"
                  editable
                  :options="brandLabel"
                  option-label="brand"
                  option-value="brand"
                  placeholder="Brand"
                />
              </div>
              <div class="p-field">
                <label for="price">Price</label>
                <InputNumber
                  id="price"
                  v-model="newAuto.price"
                  inputId="currency-us"
                  mode="currency"
                  currency="KZT"
                  locale="en-US"
                />
              </div>
              <div class="p-field">
                <label for="year">Year</label>
                <Calendar
                  id="year"
                  v-model="newAuto.year"
                  view="year"
                  dateFormat="yy"
                />
              </div>
              <div class="p-field">
                <label for="volume">Volume</label>
                <InputNumber
                  id="volume"
                  v-model="newAuto.volume"
                  :minFractionDigits="1"
                  :maxFractionDigits="1"
                />
              </div>
              <div class="p-field">
                <label for="color">Color</label>
                <ColorPicker id="color" v-model="newAuto.color" />
              </div>
              <div class="p-field">
                <label for="city">City</label>
                <Dropdown
                  id="city"
                  v-model="newAuto.city"
                  editable
                  :options="carCity"
                  option-label="city"
                  option-value="city"
                  placeholder="City"
                />
              </div>
              <div class="p-field">
                <label for="carcase">Body Type</label>
                <Dropdown
                  id="carcase"
                  v-model="newAuto.carcase"
                  editable
                  :options="carCase"
                  option-label="carcase"
                  option-value="carcase"
                  placeholder="Body Type"
                />
              </div>
              <div class="p-field">
                <label for="gear">Transmission</label>
                <div class="flex flex-wrap gap-3">
                  <RadioButton
                    id="mechanic"
                    v-model="newAuto.gear"
                    name="gear"
                    value="Manual"
                  />
                  <label for="mechanic" class="ml-2">Manual</label>
                </div>
                <div class="flex align-items-center">
                  <RadioButton
                    id="auto"
                    v-model="newAuto.gear"
                    name="gear"
                    value="Automatic"
                  />
                  <label for="auto" class="ml-2">Automatic</label>
                </div>
              </div>
              <div class="p-field">
                <label for="travel">Mileage</label>
                <InputText id="travel" v-model.number="newAuto.travel" />
                <Slider v-model="newAuto.travel" min="0" max="500000" />
              </div>
              <div class="p-field">
                <label for="travel">Image</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="./upload.php"
                  accept="image/*"
                  :maxFileSize="1000000"
                  @input="onUpload($event)"
                />
              </div>
            </div>
          </template>
          <template #footer>
            <Button label="Reset" icon="pi pi-times" @click="clearAuto" text />
            <Button label="Add" icon="pi pi-check" @click="addAuto" autofocus />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, onMounted } from "vue";
import TabMenu from "primevue/tabmenu";
import Sidebar from "primevue/sidebar";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import { useRouter, useRoute } from "vue-router";
import { useAuto } from "@/composable/useAuto";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import ColorPicker from "primevue/colorpicker";
import RadioButton from "primevue/radiobutton";
import Slider from "primevue/slider";
import FileUpload from "primevue/fileupload";
import { useModals } from "@/composable/useModals";
import Menubar from "primevue/menubar";

const auth = getAuth();
const user = ref(JSON.parse(localStorage.getItem("user")));

const googleLogin = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  location.reload();
};

const router = useRouter();
const route = useRoute();

const active = ref(0);

const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    route: "/",
  },
  {
    label: "Cards",
    icon: "pi pi-fw pi-calendar",
    route: "/cards",
  },
  {
    label: "Table",
    icon: "pi pi-fw pi-pencil",
    route: "/table",
  },
  {
    label: "Contact us",
    icon: "pi pi-fw pi-file",
    route: "/contact",
  },
]);

onMounted(() => {
  active.value = items.value.findIndex(
    (item) => route.path === router.resolve(item.route).path
  );
});

function toggleVisible2() {
  visible2.value = !visible2.value;
}

const visible = ref(false);
const visible2 = ref(false);

const value = ref("");
const value2 = ref("");
const comment = ref("");

const handleSubmit = () => {
  if (value.value && value2.value && comment.value) {
    showSuccess();
  } else {
    showError();
  }
};

const { newAuto, createAuto, clear, uploadImage } = useAuto();

async function addAuto() {
  await createAuto();
  toggleVisible2();
}

function clearAuto() {
  clear();
  toggleVisible2();
}

async function onUpload(e) {
  const image = e.target.files[0];
  await uploadImage(image);
}

const brandLabel = [
  { brand: "BMW" },
  { brand: "Audi" },
  { brand: "Mercedes" },
  { brand: "Volkswagen" },
  { brand: "Volvo" },
  { brand: "Toyota" },
  { brand: "Nissan" },
  { brand: "Mazda" },
  { brand: "Honda" },
  { brand: "Hyundai" },
  { brand: "Kia" },
  { brand: "Lexus" },
  { brand: "Ford" },
  { brand: "Chevrolet" },
  { brand: "Skoda" },
  { brand: "Renault" },
  { brand: "Peugeot" },
];

const carCity = [
  { city: "Almaty" },
  { city: "Nur-Sultan" },
  { city: "Aktobe" },
  { city: "Aktau" },
  { city: "Ust-Kamenogorsk" },
];

const carCase = [
  { carcase: "sedan" },
  { carcase: "convertible" },
  { carcase: "SUV" },
  { carcase: "wagon" },
  { carcase: "crossover" },
  { carcase: "pickup" },
  { carcase: "hatchback" },
];
</script>

<style scoped>
.btn {
  color: black;
  width: 170px;
  padding: 12px 15px;
  background: white;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

}

.center-content {
  text-align: center;
}

.side_btn {
  color: black;
  width: 170px;
  margin-bottom: 10px;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}

.btns {
  margin-top: 300px;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  padding-right: 10px;
}
.side_bar {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.custom-button {
  color: black;
  width: 170px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px 15px;
  background: none;
  color: rgb(83, 111, 111);
  border: 1px solid rgb(83, 111, 111);
}
</style>
