<template>
  <div class="card relative z-2">
    <Menubar :model="items" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onMounted } from "vue";
import { useAuto } from "@/composable/useAuto";
import Menubar from "primevue/menubar";
import { ref } from "vue";
// import { createRouter } from "@/router/index.js";
const items = ref([
  {
    label: "Home",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "Table",
        icon: "pi pi-fw pi-trash",
        command: () => createRouter(),
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
        command: () => googleRegister(),
      },

      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  },
]);

// const { autoList, getAutoList } = useAuto();

// onMounted(async () => {
//   await getAutoList();
//   console.log(autoList.value);
// });

const googleRegister = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
</script>
