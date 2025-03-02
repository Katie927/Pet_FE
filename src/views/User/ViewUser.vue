<template>

    <div class="w-container">
        <div class="wrapper">
            <div class="nav-full">
                <nav>
                    <ul class="root">
                        <li> <router-link :class="{isActive: $route.path === '/user/promotion'}" to="/user/promotion">
                                <i class="icon-MenuSolidOff"></i><span>Tổng quan</span>
                            </router-link>
                        </li>
                        <li> <router-link :class="{isActive: $route.path === '/user/order'}" to="/user/order">
                                <i class="icon-BoxSolidOff"></i><span>Đơn hàng</span>
                            </router-link>
                        </li>
                        <li> <router-link :class="{isActive: $route.path === '/user/history'}" to="/user/history">
                                <i class="icon-MoonSolidOff"></i><span>Lịch sử mua hàng</span>
                            </router-link>
                        </li>
                        <li> <router-link :class="{isActive: $route.path === '/user/profile'}" to="/user/profile">
                                <i class="icon-ShieldSolidOff"></i><span>Thông tin cá nhân</span>
                            </router-link>
                        </li>
                        <li> <router-link to="">
                                <i class="icon-LogOutSolidOff"></i><span>Đăng xuất</span>
                            </router-link>
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

</script>