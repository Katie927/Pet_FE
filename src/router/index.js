import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User/ViewUser.vue";
import UserProfile from "@/views/User/UserProfile.vue";
import UserOrders from "@/views/User/UserOrders.vue";
import UserHistory from "@/views/User/UserHistory.vue";

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/user', component: User,
      children:[
        { path: 'promotion', component: UserProfile },
        { path: 'history', component: UserHistory },
        { path: 'profile/:id', component: UserProfile },
        { path: 'order', component: UserOrders },
      ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router