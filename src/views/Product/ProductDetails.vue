<template>

    <div class="container">
        <div class="product-detail">
            <div class="box-header">
                <h1>Điện thoại Samsung Galaxy S25 Ultra - 12GB/256GB</h1>
            </div>
            <div class="box-detail-info">
                <div class="detail-info-left">
                    <div class="product-gallery">
                        <!-- Slider chính -->
                        <Swiper
                        :loop="true"
                        :navigation="true"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :modules="[Navigation, Thumbs]"
                        class="main-slider"
                        >
                        <SwiperSlide v-for="(image, index) in productImages[selectedColor]" :key="index">
                            <img :src="image" class="main-image" />
                        </SwiperSlide>
                        </Swiper>

                        <!-- Danh sách màu sắc (thumbnail) -->
                        <div class="color-selector">
                            <div
                                v-for="(images, color) in productImages"
                                :key="color"
                                class="color-item"
                                :class="{ active: selectedColor === color }"
                                @click="selectColor(color)"
                            >
                                <img :src="images[0]" class="color-thumb" />
                                <p>{{ color }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>

<!--  -->
<script setup>

    import "@/assets/styles/style.css";
    import "@/assets/styles/product-detail.css";

    import { ref } from "vue";
    import { Swiper, SwiperSlide } from "swiper/vue";
    import { Navigation, Thumbs } from "swiper/modules";

    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/thumbs";

    
    // Dữ liệu: Danh sách ảnh theo màu sắc
    const productImages = {
    "Xanh dương": [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
    ],
    "Bạc": [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-white-silver-1-e9f4db0fc4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-white-silver-1-e9f4db0fc4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-white-silver-1-e9f4db0fc4.png",
    ],
    "Xám": [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/xam.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/xam.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/xam.png",
    ],
    "Đen": [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-black-1-5ffaab118c.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-black-1-5ffaab118c.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-black-1-5ffaab118c.png",
    ],
    };

    // Màu sắc đang được chọn (mặc định là xanh dương)
    const selectedColor = ref("Xanh dương");
    const thumbsSwiper = ref(null);

    // Khi chọn màu mới, cập nhật slider chính
    const selectColor = (color) => {
    selectedColor.value = color;
    };
    

</script>


<style scoped>

.container {
    min-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    padding: 0;
    background: unset;
    /* background-color: aliceblue; */
}

</style>
