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
                    v-for="(img, index) in product.detailImages"
                    :key="index"
                    class="profile-img-detail"
                  >
                    <div class="wrap-img-detail">
                      <img :class="'preview-img-detail-' + (index + 1)" :src="img" alt="Preview" />
                    </div>
                  </div>
                  <div
                    v-for="n in (8 - product.detailImages.length)"
                    :key="'empty-' + n"
                    class="profile-img-detail"
                  >
                    <div class="wrap-img-detail add-more">
                      <span>+</span>
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
              <button class="btn btn-success btn-edit-product" @click="emit('edit-product', product)">Cập nhật</button>
              <button class="btn btn-red btn-lock-product" @click="handleInactiveProduct">Ngừng kinh doanh</button>
              <button class="btn btn-red btn-remove-product" @click="handleDeleteProduct">Xóa</button>
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

import axios from 'axios';

const props = defineProps({
  product: Object
});

const emit = defineEmits(['edit-product', 'deleted-success']);

const handleDeleteProduct = async () => {
  if (!confirm(`Bạn có chắc muốn xóa sản phẩm: ${props.product.name}?`)) return;

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Vui lòng đăng nhập lại!");
    router.push('/login');
    return;
  }

  try {
    await axios.delete(`http://localhost:8080/bej3/admin/product/delete/${props.product.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert("Xóa thành công!");
    emit('deleted-success');  // báo cha load lại danh sách
  } catch (error) {
    console.error("Lỗi khi xóa:", error);
    alert("Xóa thất bại!");
  }
};

const handleInactiveProduct = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Vui lòng đăng nhập lại!");
    router.push('/login');
    return;
  }

  try {
    await axios.put(`http://localhost:8080/bej3/admin/product/inactive/${props.product.id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    alert("Cập nhật thành công!");
    emit('deleted-success');  // báo cha load lại danh sách
  } catch (error) {
    console.error("Lỗi khi xóa:", error);
    alert("Xóa thất bại!");
  }
};

</script>

<style scoped>
.add-more {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ccc;
  cursor: pointer;
}
.add-more span {
  font-size: 24px;
  color: #999;
}

.profile-img-detail-group {
  display: flex;
  flex-wrap: wrap;
  gap: 18px; 
}

.profile-img-detail {
  width: calc(50% - 9px); 
}
</style>