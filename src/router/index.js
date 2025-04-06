import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";
import Login from "@/views/Login.vue";
import User from "@/views/User/ViewUser.vue";
import ProductDetails from "@/views/Product/ProductDetails.vue";
import UserProfile from "@/views/User/UserProfile.vue";
import UserOrders from "@/views/User/UserOrders.vue";
import UserHistory from "@/views/User/UserHistory.vue";
import ManageProduct from "@/components/layout/manage.vue";
import Manage from "@/components/layout/manage.vue";
import ListProduct from "@/views/manage-view/list-product.vue";
import Header from "@/components/layout/Header.vue";
import AdminLayout from "@/layout/AdminLayout.vue";
import CustomerLayout from "@/layout/CustomerLayout.vue";

//-----------------------------------------------------------------
const customerRoutes = [
  {
    path: '/',
    component: CustomerLayout, // Sử dụng layout cho customer
    children: [
      { path: '', component: Home }, // Home page
      { path: '/login', component: Login }, // Login page
      { 
        path: '/user', 
        component: User, 
        children: [
          { path: 'promotion', component: UserProfile },
          { path: 'history', component: UserHistory },
          { path: 'profile/my-info', component: UserProfile },
          { path: 'order', component: UserOrders },
        ]
      },
      { path: '/product-detail', component: ProductDetails },
    ]
  }
];

//-----------------------------------------------------------------
  const adminRoutes = [
    { 
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: 'product', component: ListProduct }
      ]
    }
  ];

const routes = [...customerRoutes, ...adminRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router