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
    blue: [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-silver-blue-1-8225f9e1f4.png",
    ],
    silver: [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-white-silver-1-e9f4db0fc4.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-silver-2.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-silver-3.png",
    ],
    gray: [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/xam.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-gray-2.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-gray-3.png",
    ],
    black: [
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/01/23/galaxy-s25-ultra-titan-black-1-5ffaab118c.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-black-2.png",
        "https://cdn.hoanghamobile.com/i/previewV2/Uploads/2025/02/11/galaxy-s25-ultra-black-3.png",
    ],
    };

    // Màu sắc đang được chọn (mặc định là xanh dương)
    const selectedColor = ref("blue");
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
.product-gallery {
    text-align: center;
}

.main-slider {
    width: 100%;
    height: 400px;
}
.main-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Danh sách màu sắc */
.color-selector {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

.color-item {
    cursor: pointer;
    text-align: center;
    transition: transform 0.2s;
}
.color-item:hover {
    transform: scale(1.1);
}
.color-item.active {
    border: 2px solid #007bff;      
}

.color-thumb {
    width: 80px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
}
.product-gallery .swiper .swiper-wrapper{
    background-color: white;
    border-radius: 10px;
    border: 1px solid #d1d5db;
}

/* .swiper-slide{
    background-color: white;
    border-radius: 10px;
    border: 1px solid #d1d5db;
} */
</style>