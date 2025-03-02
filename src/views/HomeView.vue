
<template>
  <div class="w-container body-wrapper">
    <div class="wrapper">
      <div class="nav-full">
        <nav>
          <h2>Danh mục</h2>
          <ul class="root">
            <li v-for="(item, index) in categories" :key="index">
              <a href="">
                <label for=""><img :src="item.imgSrc" :alt="item.name"></label>
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
          
        </nav>
      </div>
      <div class="right-content">

      </div>
    </div>
  </div>
    
</template>

<script setup>
  import "@/assets/styles/home-style.css";
  import "@/assets/styles/style.css";
  import { ref } from "vue";


  const images = import.meta.glob('/src/assets/img/side-bar-img/*', { eager: true });
  console.log(images)
  const categories = ref([
    { name: "Điện thoại", imgSrc: images['/src/assets/img/side-bar-img/mobile.png']?.default },
    { name: "Apple", imgSrc: images['/src/assets/img/side-bar-img/apple.png']?.default },
    { name: "Laptop", imgSrc: images['/src/assets/img/side-bar-img/laptop.png']?.default },
    { name: "Tablet", imgSrc: images['/src/assets/img/side-bar-img/tablet.png']?.default },
    { name: "Đồng hồ", imgSrc: images['/src/assets/img/side-bar-img/dong-ho.png']?.default },
    { name: "Phụ kiện", imgSrc: images['/src/assets/img/side-bar-img/phu-kien.png']?.default }
  ]);
  
</script>

<style scoped>
  .nav-full nav ul li > a:hover {
    background: #EBEBEB;
  }
  .nav-full nav ul li > a{
    font-weight: 700;
  }
</style>

<!-- <ul class="root">
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/mobile.png" alt="Điện thoại"></label>
                <span> Điện thoại </span>
              </a>
            </li>
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/apple.png" alt="Apple"></label>
                <span> Apple </span>
              </a>
            </li>
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/laptop.png" alt="Laptop"></label>
                <span> Laptop </span>
              </a>
            </li>
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/tablet.png" alt="Tablet"></label>
                <span> Tablet </span>
              </a>
            </li>
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/dong-ho.png" alt="Đồng hồ"></label>
                <span> Đồng hồ </span>
              </a>
            </li>
            <li>
              <a href="">
                <label for=""><img src="@/assets/img/side-bar-img/phu-kien.png" alt="Phụ kiện"></label>
                <span> Phụ kiện </span>
              </a>
            </li>
          </ul> -->