import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table',
      name: 'table',
      component: ()=> import ('../views/TablePage.vue')

    },
    {
      path: '/cards',
      name: 'cards',
      component: ()=> import ('../views/cardPage.vue')
    },
    {
      path: '/profile',
      name: 'about',
      component: ()=> import ('../views/ProfilePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'about',
      component: ()=> import ('../views/NotFounPage.vue')
    }
  ]
})

export default router
