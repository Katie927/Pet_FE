import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User/ViewUser.vue";
import ProductDetails from "@/views/Product/ProductDetails.vue";
import UserProfile from "@/views/User/UserProfile.vue";
import UserOrders from "@/views/User/UserOrders.vue";
import UserHistory from "@/views/User/UserHistory.vue";
import ManageProduct from "@/views/manage-view/manage-product.vue";

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login },
  { path: '/user', component: User,
      children:[
        { path: 'promotion', component: UserProfile },
        { path: 'history', component: UserHistory },
        { path: 'profile/my-info', component: UserProfile },
        { path: 'order', component: UserOrders },
      ],
      
  },
  { path: '/product-detail', component: ProductDetails },
  { path: '/manage-product', component: ManageProduct },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router