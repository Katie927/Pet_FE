<template>
<section class="add-product" id="addProduct" style="display: block;">
    <div class="mask mask-1"></div>
      <div id="containerAddProduct">
        <!-- add product header -->
        <div class="add-product-head header">
          <div class="add-product-head-title header-title">
            <span id="titleAddProduct" class="add-product-title-heading span-heading">Thêm hàng hóa</span>
            <i class="add-product-icon fas fa-solid fa-close" aria-hidden="true" data-action="addCommodity"
                  @click="$emit('close')"></i>
          </div>
        </div>
        <!-- add product container -->
        <div class="add-product-container">

          <!-- form content -->
          <div class="tab-content tab-content-form-product" style="display: block;">
            <div class="form-wrapper">
              <!-- left content -->
              <div class="info-form-image-add-product left-content-info-product">
                <!-- Initialization information -->
                <div class="information-group information-group-form-product">
                  <!-- Mã hàng -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Mã hàng
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Mã hàng là thông tin duy nhất" aria-hidden="true"></i>
                      <span class="sr-only">Mã hàng là thông tin duy nhất</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        class="form-control form-control-form-group-product"
                        type="text"
                        placeholder="Mã hàng tự động"
                        readonly="true"
                        v-model="form.id"
                      />
                    </div>
                  </div>

                  <!-- Mã vạch -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Tên hàng
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Tên hàng là tên của sản phẩm" aria-hidden="true"></i>
                      <span class="sr-only">Tên hàng là tên của sản phẩm</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        class="form-control form-control-form-group-product"
                        type="text"
                        required
                        v-model="form.name"
                      />
                    </div>
                  </div>

                  <!-- Tên hàng -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Tên hàng
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Tên hàng là tên của sản phẩm" aria-hidden="true"></i>
                      <span class="sr-only">Tên hàng là tên của sản phẩm</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        class="form-control form-control-form-group-product"
                        type="text"
                        v-model="form.name"
                      />
                    </div>
                  </div>

                  <!-- Nhóm hàng -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Nhóm hàng
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Lựa chọn nhóm hàng cho sản phẩm" aria-hidden="true"></i>
                      <span class="sr-only">Lựa chọn nhóm hàng cho sản phẩm</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        class="form-control form-control-form-group-product"
                        type="text"
                        placeholder="---Lựa chọn---"
                        v-model="form.group"
                      />
                      <div class="group-icon-add-new">
                        <i class="show-hide-icon fas fa-solid fa-sort-down" aria-hidden="true"></i>
                        <a href="#" class="add-product-group-icon btn-icon add-group-product fas fa-solid fa-plus"
                          title="Thêm nhóm hàng mới"
                          aria-hidden="true"
                          @click.prevent="addGroup"></a>
                        <span class="sr-only">Thêm nhóm hàng mới</span>
                      </div>
                    </div>
                  </div>

                  <!-- Thương hiệu -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Thương hiệu
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Thương hiệu, nhãn hiệu của sản phẩm" aria-hidden="true"></i>
                      <span class="sr-only">Thương hiệu, nhãn hiệu của sản phẩm</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        id="productTrademark"
                        class="form-control form-control-form-group-product"
                        type="text"
                        placeholder="---Chọn thương hiệu---"
                        v-model="form.brand"
                      />
                      <div class="group-icon-add-new">
                        <i class="show-hide-icon fas fa-solid fa-sort-down" id="hideAddProductTrademarkForm" aria-hidden="true"></i>
                        <a href="#" class="add-trademark-icon btn-icon add-group-product fas fa-solid fa-plus"
                          title="Thêm thương hiệu mới"
                          id="addProductTrademarkForm"
                          aria-hidden="true"
                          @click.prevent="addBrand"></a>
                        <span class="sr-only">Thêm thương hiệu mới</span>
                      </div>
                    </div>
                  </div>

                  <!-- Vị trí -->
                  <div class="form-group form-group-product">
                    <label class="form-label">
                      Vị trí
                      <i class="parameter-type-icon fas fa-solid fa-circle-info" title="Sử dụng để ghi lại vị trí mà hàng hóa được cất giữ hoặc trưng bày. Ví dụ: kệ số 1, số 2..." aria-hidden="true"></i>
                      <span class="sr-only">Sử dụng để ghi lại vị trí mà hàng hóa được cất giữ hoặc trưng bày. Ví dụ: kệ số 1, số 2...</span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        id="productLocation"
                        class="form-control form-control-form-group-product"
                        type="text"
                        v-model="form.location"
                      />
                      <div class="group-icon-add-new">
                        <i class="show-hide-icon fas fa-solid fa-pen" id="hideAddAccountFormproduct" aria-hidden="true"></i>
                        <a href="#" class="add-account-icon btn-icon add-group-product fas fa-solid fa-plus"
                          title="Thêm vị trí mới"
                          id="addNewAccountFormAddProduct"
                          aria-hidden="true"
                          @click.prevent="addLocation"></a>
                        <span class="sr-only">Thêm vị trí mới</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--  -->

                <div class="form-image-group">
                  <div
                    class="form-image-product"
                    v-for="(img, index) in form.images"
                    :key="index"
                  >
                    <div class="wrap-img wrap-img-form-product">
                      <label :for="`productImg${index + 1}`" class="custom-upload-btn">
                        <img
                          :id="`previewImg${index + 1}`"
                          :src="img || ''"
                          alt="Preview Image"
                        />
                      </label>
                    </div>

                    <div class="dropzone">
                      <div
                        class="upload-button"
                        :id="`uploadBtn${index + 1}`"
                        :data-preview-id="`previewImg${index + 1}`"
                      >
                        <input
                          type="file"
                          :id="`productImg${index + 1}`"
                          accept="image/*"
                          @change="e => handleImageChange(e, index)"
                        />
                        <!-- <div class="upload-status-total">
                          <em>drop files here to upload*</em>
                          <strong class="upload-status"></strong>
                          <span class="file-name">{{ getFileName(index) }}</span>
                          <strong>100%</strong>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- right content -->
              <div class="info-form-price-add-product right-content-info-product">
                <div class="information-group information-group-form-product">
                  <div class="form-group form-price-add-product">
                    <label class="form-label">
                      Giá vốn
                      <i
                        class="parameter-type-icon fas fa-solid fa-circle-info"
                        title="Giá vốn dùng để tính lợi nhuận cho sản phẩm (sẽ tự động thay đổi khi thay đổi phương pháp tính giá vốn)"
                        aria-hidden="true"
                      ></i>
                      <span class="sr-only">
                        Giá vốn dùng để tính lợi nhuận cho sản phẩm (sẽ tự động thay đổi khi thay đổi phương pháp tính giá vốn)
                      </span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        type="text"
                        class="form-control form-control-form-price-add-product"
                        v-model="form.originalPrice"
                      />
                    </div>
                  </div>

                  <div class="form-group form-price-add-product">
                    <label class="form-label">
                      Giá niêm yết
                      <i
                        class="parameter-type-icon fas fa-solid fa-circle-info"
                        title="Giá niêm yết hãng đưa ra"
                        aria-hidden="true"
                      ></i>
                      <span class="sr-only">
                        Giá niêm yết hãng đưa ra
                      </span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        type="text"
                        class="form-control form-control-form-price-add-product"
                        v-model="form.originalPrice"
                      />
                    </div>
                  </div>

                  <div class="form-group form-price-add-product">
                    <label class="form-label">Giá bán</label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        type="text"
                        class="form-control form-control-form-price-add-product"
                        v-model="form.finalPrice"
                      />
                      <i
                        id="tagsIconProduct"
                        class="parameter-type-icon fas fa-solid fa-tags"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>

                  <div class="form-group form-price-add-product">
                    <label class="form-label">
                      Tồn kho
                      <i
                        class="parameter-type-icon fas fa-solid fa-circle-info"
                        title="Số lượng tồn kho của sản phẩm (sẽ tự động tạo ra phiếu kiểm kho cho sản phẩm)"
                        aria-hidden="true"
                      ></i>
                      <span class="sr-only">
                        Số lượng tồn kho của sản phẩm (sẽ tự động tạo ra phiếu kiểm kho cho sản phẩm)
                      </span>
                    </label>
                    <div class="form-wrap form-wrap-product">
                      <input
                        type="text"
                        class="form-control form-control-form-price-add-product"
                        v-model="form.inventory"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- product information below-->
          </div>

          <!-- detail product -->
          <div class="detail-product">
            <!-- detail product container -->
            <div class="detail-product-container">
              <div class="detail-group detail-group-form-product">
                <!-- detail inventory levels -->
                <div class="form-group form-detail-inventory-add-product">
                  <h3 class="form-title form-title-inventory">
                    <span class="form-span form-span-inventory">Định mức tồn</span>
                  </h3>
                  <div class="form-wrapper form-wrapper-detail-inventory">
                    <div class="form-wrap form-wrap-product-detail-inventory">
                      <label
                        class="form-label form-label-wrap-detail-inventory"
                      >
                        Ít nhất
                        <i
                          class="inventory-icon fas fa-solid fa-circle-info"
                          title="Hệ thống sẽ dựa vào thông tin này để cảnh báo hàng dưới định mức tồn nếu tồn kho < Tồn ít nhất"
                          aria-hidden="true"
                        ></i>
                        <span class="sr-only">
                          Hệ thống sẽ dựa vào thông tin này để cảnh báo hàng dưới định mức tồn nếu tồn kho &lt; Tồn ít nhất
                        </span>
                      </label>
                      <div class="form-label-icon form-label-icon-inventory">
                        <input
                          type="text"
                          class="form-control form-control-inventory-levels-detail"
                          placeholder="0"
                          v-model="form.minInventory"
                        />
                      </div>
                    </div>

                    <div class="form-wrap form-wrap-product-detail-inventory">
                      <label
                        class="form-label form-label-wrap-detail-inventory"
                      >
                        Nhiều nhất
                        <i
                          class="inventory-icon fas fa-solid fa-circle-info"
                          title="Hệ thống sẽ dựa vào thông tin này để cảnh báo hàng vượt định mức tồn nếu tồn kho > Tồn nhiều nhất"
                          aria-hidden="true"
                        ></i>
                        <span class="sr-only">
                          Hệ thống sẽ dựa vào thông tin này để cảnh báo hàng vượt định mức tồn nếu tồn kho &gt; Tồn nhiều nhất
                        </span>
                      </label>

                      <div class="form-label-icon form-label-icon-inventory">
                        <input
                          type="text"
                          class="form-control form-control-inventory-levels-detail"
                          placeholder="999,999,999"
                          v-model="form.maxInventory"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- detail description -->
                <div class="form-group form-detail-description-add-product">
                  <h3 class="form-title form-title-description">
                    <span class="form-span form-span-description">Mô tả</span>
                  </h3>
                  <div class="form-wrapper form-wrapper-detail-description">
                    <div class="form-wrap form-wrap-product-detail-description">
                      <div class="form-label-icon form-label-icon-description">
                        <textarea
                          class="product-desc form-input"
                          v-model="form.description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- detail notes -->
                <div class="form-group form-detail-notes-add-product">
                  <h3 class="form-title form-title-notes">
                    <span class="form-span form-span-notes">Mẫu ghi chú (hóa đơn, đặt hàng)</span>
                  </h3>
                  <div class="form-wrapper form-wrapper-detail-notes">
                    <div class="form-wrap form-wrap-product-detail-notes">
                      <div class="form-label-icon form-label-icon-notes">
                        <textarea
                          class="note-form form-input"
                          v-model="form.note"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- add product bottom -->
        <div class="add-product-bottom">

          <button
            id="btnSaveApplicationProductMore"
            class="btn btn-success btn-success-bottom"
            @click="handleAddNew"
          >
            <i class="btn-success-icon fas fa-solid fa-floppy-disk" aria-hidden="true"></i>
            <span>Thêm mới</span>
          </button>

          <button
            id="btnSaveApplicationProductCopy"
            class="btn btn-success btn-success-bottom"
            @click="handleSaveAndCopy"
          >
            <i class="btn-success-icon fas fa-solid fa-floppy-disk" aria-hidden="true"></i>
            <span>Lưu &amp; Sao chép</span>
          </button>

          <button
            id="cancelAddProduct"
            class="btn btn-default btn-default-bottom"
            data-action="addCommodity"
            @click="handleCancel"
          >
            <i class="btn-success-icon fas fa-solid fa-ban" aria-hidden="true"></i>
            <span>Bỏ qua</span>
          </button>
        </div>
    </div>
</section>

</template>

<script setup>

import '@/assets/styles/admin-css/kv-product.css'; 
import '@/assets/styles/admin-css/kv-style.css';
import axios from 'axios';

import { reactive } from 'vue'

const form = reactive({
  id: '',
  name: '',
  originalPrice: '',
  finalPrice: '',
  Image: ''
  // location: '',
  // images: [null, null, null, null, null]  // 5 ảnh
})

const handleAddNew = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Token không tồn tại!");
    router.push("/login");
    return;
  }
  try {
    const response = await axios.post(
      "http://localhost:8080/bej3/admin/product/add",
      {
        name: form.name,
        originalPrice: form.originalPrice,
        finalPrice: form.finalPrice
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    alert("Thêm hàng hóa thành công!");
    form.name = '';
    form.originalPrice = '';
    form.finalPrice = '';
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
    alert("Thêm hàng hóa thất bại!");
  }
}

</script>