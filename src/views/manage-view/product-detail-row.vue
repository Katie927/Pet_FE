<!-- components/ProductDetailRow.vue -->
<template>
  <tr v-if="product" class="row-detail row-detail-commodity">
    <td colspan="9" class="cell-detail">
      <div class="product-detail">
        <div class="product-detail-container">
          <div class="product-detail-body">
            <div class="identification-item">
              <h3 class="identification-item-title">{{ product.name }}</h3>
            </div>

            <div class="form-wrapper product-detail-body-container">
              <div class="product-detail-left">
                <div class="profile-img-detail-large">
                  <div class="wrap-img-detail-large">
                    <img class="preview-img-detail-large" :src="product.image" alt="Preview" />
                  </div>
                </div>
                <div class="profile-img-detail-group">
                  <div
                    v-for="(img, index) in 5"
                    :key="index"
                    class="profile-img-detail"
                  >
                    <div class="wrap-img-detail">
                      <img :class="'preview-img-detail-' + (index + 1)" :src="img" alt="Preview" />
                    </div>
                  </div>
                </div>
                
              </div>

              <div class="product-detail-right">
                <div class="product-detail-right-content">
                  <div class="product-detail-identification">
                    <div class="identification-group">
                      <div class="identification-item"><span class="identification-item-name">Mã hàng:</span><span class="identification-item-code">{{ product.name }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Nhóm hàng:</span><span class="identification-item-code">{{ product.name }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Loại hàng:</span><span class="identification-item-code">{{ product.name }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Thương hiệu:</span><span class="identification-item-code">{{ product.name }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Giá bán:</span><span class="identification-item-code">{{ product.originalPrice.toLocaleString('vi-VN') }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Giá vốn:</span><span class="identification-item-code">{{ product.finalPrice.toLocaleString('vi-VN') }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Trọng lượng:</span><span class="identification-item-code">{{ product.name }}</span></div>
                      <div class="identification-item"><span class="identification-item-name">Vị trí:</span><span class="identification-item-code">{{ product.name }}</span></div>
                    </div>
                  </div>

                  <div class="product-detail-description">
                    <div class="description-group">
                      <div class="description-item"><span class="description-item-name">Mô tả</span><span class="description-item-code">{{ product.name }}</span></div>
                      <div class="description-item"><span class="description-item-name">Ghi chú đặt hàng</span><span class="description-item-code">{{ product.name }}</span></div>
                      <div class="description-item"><span class="description-item-name">Nhà cung cấp</span><span class="description-item-code">{{ product.name }}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="add-edit-product">
              <button class="btn btn-success btn-edit-product">Cập nhật</button>
              <button class="btn btn-red btn-lock-product">Ngừng kinh doanh</button>
              <button class="btn btn-red btn-remove-product">Xóa</button>
              <button class="btn btn-more btn-more-product">...</button>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>


<script setup>

import '@/assets/styles/admin-css/kv-product.css'; 
import '@/assets/styles/admin-css/kv-style.css'; 


defineProps({
  product: Object
})

</script>