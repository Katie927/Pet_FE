<template>
<div class="product-container">
    <h1 class="title">Danh sách sản phẩm</h1>
    <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
        <h2>{{ product.name }}</h2>
        <p>Giá: {{ product.price }} VND</p>
        <button @click="addToCart(product)">Thêm vào giỏ</button>
    </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
setup() {
    const products = ref([
    { id: 1, name: 'Sản phẩm 1', price: 100000 },
    { id: 2, name: 'Sản phẩm 2', price: 200000 },
    { id: 3, name: 'Sản phẩm 3', price: 300000 }
    ]);

    const addToCart = (product) => {
    console.log('Thêm vào giỏ:', product);
    };

    return { products, addToCart };
}
};
</script>

<style scoped>
    .product-container {
    padding: 20px;
    }
    .title {
    text-align: center;
    }
    .product-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    }
    .product-item {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    }
    button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    }
    button:hover {
    background-color: #0056b3;
    }
</style>
