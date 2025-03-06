
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
  <!-- main-content -->
      <div class="right-content">
        <!-- top-slider -->
        <section>
          <div class="container"> 
            <div class="top-slider">
              <div class="slider-container">
                <Swiper
                  :loop="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  :navigation="true"
                  :pagination="{ clickable: true }"
                  :modules="[Navigation, Pagination]"
                  class="main-slider"
                >
                  <SwiperSlide v-for="(item, index) in sliderImages" :key="index">
                    <a :href="item.link" target="_blank">
                      <img :src="item.url" alt="Slide Image" class="slide-image" />
                    </a>
                  </SwiperSlide>
                </Swiper>

              </div>
            </div>
          </div>
        </section>

        <!-- product-list -->
        <section>
          <div class="container list-for-you">
            <div class="title">
              Dành cho bạn
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
    
</template>

<script setup>
  import "@/assets/styles/home-style.css";
  import "@/assets/styles/style.css";
  import { ref } from "vue";

  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Navigation, Pagination } from "swiper/modules";


  const images = import.meta.glob('/src/assets/img/side-bar-img/*', { eager: true });
  // console.log(images)
  const categories = ref([
    { name: "Điện thoại", imgSrc: '/src/assets/img/side-bar-img/mobile.png' },
    { name: "Apple", imgSrc: '/src/assets/img/side-bar-img/apple.png' },
    { name: "Laptop", imgSrc: '/src/assets/img/side-bar-img/laptop.png' },
    { name: "Tablet", imgSrc: images['/src/assets/img/side-bar-img/tablet.png']?.default },
    { name: "Đồng hồ", imgSrc: images['/src/assets/img/side-bar-img/dong-ho.png']?.default },
    { name: "Phụ kiện", imgSrc: images['/src/assets/img/side-bar-img/phu-kien.png']?.default }
  ]);

  const sliderImages = ref([
    {
      url: "/src/assets/img/main-slider-img/16e-dat-truoc-ngay-1200x375.png",
      link: "",
    },
    {
      url: "/src/assets/img/main-slider-img/pre-oder-xiaomi-web1200.png",
      link: "",
    },
    {
      url: "/src/assets/img/main-slider-img/s25-ultra-1200x375.png",
      link: "",
    },
    {
      url: "/src/assets/img/main-slider-img/banner-iphone-16-series_638761814156857415.png",
      link: "",
    },
    {
      url: "/src/assets/img/main-slider-img/redmi-pad-pro-01.jpg",
      link: "",
    },
    {
      url: "/src/assets/img/main-slider-img/pad-11-web.png",
      link: "",
    },
  ]);

  // const thumbsSwiper = ref(null);
  
</script>

<style scoped>
  .nav-full nav ul li > a:hover {
    background: #EBEBEB;
  }
  .nav-full nav ul li > a{
    font-weight: 700;
  }
</style>
