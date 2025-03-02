
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
        <form action="" class="form-create-user" @submit.prevent="handleLogin">
          <div class="login-row login-row-aa">
            <label for="">Email</label>
            <input type="email" name="email" id="email" placeholder="Nhập email" required
                  v-model="loginData.email">
          </div>
          <div class="login-row">
            <label for="">Mật khẩu</label>
            <input type="password" name="password" id="password" placeholder="Nhập mật khẩu" required
                  v-model="loginData.password">
          </div>

          <div class="password-forget">
            <a href="">Quên mật khẩu</a>
          </div>
          <div class="login-button">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
      </div>

      <!-- Form sign up -->
      <div class="login-form" v-else>
        <form action="" class="form-create-user" @submit.prevent="handleSignUp">
          <div class="login-row login-row-aa">
            <label for="">Email</label>
            <input type="email" name="email" id="email" placeholder="Nhập email" required
                      v-model="signUpData.email">
          </div>
          <div class="login-row">
            <label for="">Mật khẩu</label>
            <input type="password" name="password" id="password" placeholder="Nhập mật khẩu" required
                      v-model="signUpData.password">
          </div>
          <div class="login-row">
            <label for="">Nhập lại mật khẩu</label>
            <input type="password" name="retypePassword" id="retypePassword" placeholder="Nhập lại mật khẩu" required
                      v-model="signUpData.retypePassword">
          </div>

          <div class="login-button">
            <button type="submit">Đăng ký</button>
          </div>
        </form>
      </div>

      <p v-if="errorMessage">{{ errorMessage }}</p>

    </div>
    
</template>

<script setup>

    import "@/assets/styles/login-style.css";
    import "@/assets/styles/style.css";
    import axios from "axios";

    import { ref } from "vue";

    const isLoginForm = ref(true);

    const errorMessage = ref("");

// login
    const loginData = ref({
      email: "",
      password: "",
    })
    function handleLogin(){
      if(loginData.value.email === "admin@gmail.com" && loginData.value.password === "123"){
        errorMessage.value = "Dang nhap thanh cong!";
        alert("Dang nhap thanh cong");
      }
      else{
        errorMessage.value = "Thong tin khong chinh xac!";
      }
    }

// sign up
    const signUpData = ref({
      email: "",
      password: "",
      retypePassword: "",
    });
    const handleSignUp = async () => {
      errorMessage.value = "";
      console.log("email");
      console.log(signUpData.value.email);

      if (signUpData.value.password !== signUpData.value.retypePassword) {
        errorMessage.value = "Mật khẩu và xác nhận mật khẩu không khớp.";
        return;
      } 
      try {
        const response = await axios.post("http://localhost:8080/bej3/users", {
          email: signUpData.value.email,
          password: signUpData.value.password
        })

        errorMessage.value = "Tao nguoi dung thanh cong!";
        signUpData.value.email = "";
        signUpData.value.password = "";
        signUpData.value.retypePassword = "";
      } catch (error) {
        errorMessage.value = error.response?.data?.message || "Da xay ra loi.";
      }
      console.log(signUpData.value.email);
    }

    
</script>

