<template>

    <div class="w-container">
        <div class="wrapper">
            <div class="nav-full">
                <nav>
                    <ul class="root">
                        <li v-for="item in userSidebar" :key="item.path">
                            <router-link :class="{ isActive: $route.path === item.path }" :to="item.path">
                                <i :class="item.icon"></i>
                                <span>{{ item.label }}</span>
                            </router-link>
                        </li>
                        <li> <a href="">
                                <i class="icon-LogOutSolidOff"></i><span>Đăng xuất</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="right-content">
                <router-view />
            </div>
        </div>
    </div>

</template>

<script setup>

    import "@/assets/styles/login-style.css";
    import { ref } from "vue";

    const userSidebar = ref([
        { path: "/user/promotion", icon: "icon-MenuSolidOff", label: "Tổng quan" },
        { path: "/user/order", icon: "icon-BoxSolidOff", label: "Đơn hàng" },
        { path: "/user/history", icon: "icon-MoonSolidOff", label: "Lịch sử mua hàng" },
        { path: "/user/profile", icon: "icon-ShieldSolidOff", label: "Thông tin cá nhân" },
    ])

</script>