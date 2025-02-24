<script setup>
</script>

<template>
    <div class="w-container login-form-container" style="background-color: white;">
      <div class="login-title">
        <h3 class="login-title-border" 
              :class="{formActive: isLoginForm}" @click="isLoginForm = true"
        >
            Đăng nhập
        </h3>
        <h3 class="login-title-border" 
              :class="{formActive: !isLoginForm}" @click="isLoginForm = false"
        >
            Đăng ký
        </h3>
      </div>
      <!-- Form login -->
      <div class="login-form" v-if="isLoginForm">
        <form action="" class="form-create-user">
          <div class="login-row login-row-aa">
            <label for="">Email</label>
            <input type="email" name="email" id="email" placeholder="Nhập email">
          </div>
          <div class="login-row">
            <label for="">Mật khẩu</label>
            <input type="password" name="password" id="password" placeholder="Nhập mật khẩu">
          </div>

          <div class="password-forget">
            <a href="">Quên mật khẩu</a>
          </div>
          <div class="login-button">
            <button type="button">Đăng nhập</button>
          </div>
        </form>
      </div>

      <!-- Form sign in -->
      <div class="login-form" v-else>
        <form action="" class="form-create-user">
          <div class="login-row login-row-aa">
            <label for="">Email</label>
            <input type="email" name="email" id="email" placeholder="Nhập email">
          </div>
          <div class="login-row">
            <label for="">Mật khẩu</label>
            <input type="password" name="password" id="password" placeholder="Nhập mật khẩu">
          </div>
          <div class="login-row">
            <label for="">Nhập lại mật khẩu</label>
            <input type="password" name="retypePassword" id="retypePassword" placeholder="Nhập lại mật khẩu">
          </div>

          <div class="login-button">
            <button type="button">Đăng ký</button>
          </div>
        </form>
      </div>

    </div>
    
</template>

<script setup>

    import "@/assets/styles/login-style.css";
    import "@/assets/styles/style.css";

    import { ref } from "vue";

    const isLoginForm = ref(true)
    // console.log(isLoginForm)
    
    // export default {
    //   name: "Login"
    // };
    
</script>
