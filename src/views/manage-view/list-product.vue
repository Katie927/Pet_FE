<template>

    <div class="kv-product">
        <div class="kv-container">
            <div class="kv-product-main-body">
                <!-- left -->
                <div class="kv-product-main-left">
                    <!-- Header -->
                    <div class="em-left-header">
                        <h1 class="em-left-heading">Hàng hóa</h1>
                    </div>

                    <!-- Loại hàng -->
                    <div class="em-left-content content-product-type">
                        <div class="em-left-content-title">
                            <h3 class="em-left-content-heading">Loại hàng</h3>
                        </div>
                        <div class="product-type-group-check">
                            <label
                            v-for="(item, index) in productTypes"
                            :key="index"
                            class="container-check-box check-box-menu-type"
                            >
                            {{ item.label }}
                                <input
                                    type="checkbox"
                                    v-model="item.checked"
                                />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <!-- Nhóm hàng -->
                    <div class="em-left-content content-product-group">
                    <div class="em-left-content-title">
                        <h3 class="em-left-content-heading">Nhóm hàng</h3>
                    </div>
                    <div class="product-group-list">
                        <div class="product-group-icon-input">
                        <i class="product-group-search-icon fas fa-search" aria-hidden="true"></i>
                        <input
                            id="productGroupListSearch"
                            type="search"
                            class="form-control hide-show-product-group"
                            placeholder="Tìm kiếm nhóm hàng"
                            v-model="searchKeyword"
                        />
                        </div>

                        <div class="product-group-list-items">
                        <ul class="form-items">
                            <li
                            v-for="(group, index) in filteredProductGroups"
                            :key="index"
                            class="form-item"
                            >
                            <span class="item-name product-group-name">{{ group }}</span>
                            <i class="fas fa-pen" aria-hidden="true"></i>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- right -->
                <div class="kv-product-main-right">
                    <div class="product-right-header">
                        <!-- header filter search -->
                        <div class="header-filter-search">
                            <div class="input-group input-group-search-product-code" id="groupInputSearchProductCode">
                                <i class="input-group-icon fas fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                                    <input type="text" name="" id="searchCodeName" class="form-control" placeholder="Tìm theo mã, Tên hàng">
                                <i class="input-group-icon fas fa-solid fa-caret-down" aria-hidden="true"></i>
                            </div>

                            <div class="choosed-items" style="display: none;">
                                <div class="choosed-number">
                                    <span>Đã chọn</span>
                                    <div id="selectedCountProduct">0</div>
                                </div>
                                <i class="btn-icon fas fa-solid fa-times" id="btnIconCloseProduct" aria-hidden="true"></i>
                            </div>
                        </div>

                        <!-- header filter buttons -->
                        <div class="header-filter-buttons">
                            <ul class="header-filter-button-items">

                                <li class="header-filter-button-item" id="addMoreProductButton">
                                    <button class="btn-success">
                                        <i class="btn-icon fas fa-solid fa-plus" aria-hidden="true"></i>
                                        <span>Thêm mới</span>
                                        <span></span>
                                        <i class="btn-icon fas fa-solid fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <ul class="btn-add-product-list" id="btnAddProductList">
                                        <li>
                                            <button class="operation" id="addCommodityProductButton" data-action="">
                                            <i class="btn-icon fas fa-solid fa-plus" aria-hidden="true"></i>
                                            <span>Thêm hàng hóa</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="operation" id="addServiceProductButton" data-action="">
                                            <i class="btn-icon fas fa-solid fa-plus" aria-hidden="true"></i>
                                            <span>Thêm dịch vụ</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="operation" id="addComboProductButton" data-action="">
                                            <i class="btn-icon fas fa-solid fa-plus" aria-hidden="true"></i>
                                            <span>Thêm Combo-đóng gói</span>
                                            </button>
                                        </li>
                                    </ul>
                                    
                                </li>
                                
                                <li class="header-filter-button-item">
                                    <button class="btn-success" id="" data-action="importFile">
                                    <i class="btn-icon fas fa-solid fa-file-import" aria-hidden="true"></i>
                                    <span>Import</span>
                                    </button>
                                </li>

                                <li class="header-filter-button-item">
                                    <button class="btn-success" id="" data-action="exportFile">
                                    <i class="btn-icon fas fa-solid fa-file-export" aria-hidden="true"></i>
                                    <span>Xuất file</span>
                                    </button>
                                </li>

                                <li class="header-filter-button-item">
                                    <button class="btn-success k-link">
                                        <i class="btn-icon fas fa-solid fa-list" aria-hidden="true"></i>
                                        <span></span>
                                        <i class="btn-icon fas fa-solid fa-caret-down" aria-hidden="true"></i>
                                    </button>
                                    <ul class="">
                                        <li class="">
                                            <div class="animation-container animation-container-product" id="animationContainerProduct">
                                                <label class="container-check-box check-box-menu">Hình ảnh
                                                    <input id="containerCheckBoxCellImgProduct" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Mã hàng
                                                    <input id="containerCheckBoxProductCode" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Tên hàng
                                                    <input id="containerCheckBoxProductName" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Nhóm hàng
                                                    <input id="containerCheckBoxProductGroup" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>


                                                <label class="container-check-box check-box-menu">Giá bán
                                                    <input id="containerCheckBoxSellingPrice" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Giá vốn
                                                    <input id="containerCheckBoxCostPrice" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Thương hiệu
                                                    <input id="containerCheckBoxTrademark" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Tồn kho
                                                    <input id="containerCheckBoxInventory" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Vị trí
                                                    <input id="containerCheckBoxLocation" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>

                                                <label class="container-check-box check-box-menu">Trạng thái
                                                    <input id="containerCheckBoxProductStatus" type="checkbox" checked="checked">
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- product table -->
                    <div class="table-container">
                        <table class="employee-table-list">
                            <thead class="table-header">
                                <tr class="table-row-header">
                                    <th id="cellCheckAll">
                                        <label class="container-check-box">
                                            <input
                                            class="check-all"
                                            type="checkbox"
                                            id="checkAllProduct"
                                            v-model="checkAll"
                                            @change="toggleCheckAll"
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </th>
                                    <th class="cell-img" for="containerCheckBoxCellImgProduct">
                                        <a href="#" class="k-link"></a>
                                    </th>
                                    <!-- <th class="cell-img" for="containerCheckBoxCellImgProduct">
                                        <a href="#" class="k-link"></a>
                                    </th> -->
                                    <th class="product-name" for="containerCheckBoxProductName">Tên hàng</th>
                                    <th class="product-type" for="containerCheckBoxProductType">Loại hàng</th>
                                    <th class="selling-price" for="containerCheckBoxSellingPrice">Giá bán</th>
                                    <th class="cost-price" for="containerCheckBoxCostPrice">Giá vốn</th>
                                    <th class="trademark" for="containerCheckBoxTrademark">Thương hiệu</th>
                                    <th class="inventory" for="containerCheckBoxInventory">Tồn kho</th>
                                    <th class="inventory" for="containerCheckBoxInventory">Tồn kho</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr
                                    v-for="(product, index) in productList"
                                    :key="product.id"
                                    class="kv-table-row"
                                >
                                    <td class="cell-check">
                                        <label class="container-check-box">
                                            <input
                                            type="checkbox"
                                            v-model="selected"
                                            :value="product.id"
                                            />
                                            <span class="checkmark"></span>
                                        </label>
                                    </td>
                                    <td class="cell-img">
                                        <img :src="product.image" alt="img" style="width: 30px" />
                                    </td>
                                    <!-- <td class="cell-img"></td> -->
                                    <td class="product-name">{{ product.name }}</td>
                                    <td class="product-type">{{ product.type }}</td>
                                    <td class="selling-price">{{ product.sellingPrice }}</td>
                                    <td class="cost-price">{{ (product.costPrice) }}</td>
                                    <td class="trademark">{{ product.trademark }}</td>
                                    <td class="inventory">{{ product.inventory }}</td>
                                    <td class="inventory">{{ product.inventory }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import '@/assets/styles/admin-css/kv-product.css'; 
import '@/assets/styles/admin-css/kv-style.css'; 

import { ref, computed } from 'vue'

const productTypes = ref([
  { label: 'Hàng hóa', checked: true },
  { label: 'Hàng hóa', checked: true }
])

const searchKeyword = ref('')
const productGroups = ref(['Sách', 'Kéo'])

const filteredProductGroups = computed(() => {
  const keyword = searchKeyword.value.toLowerCase()
  return productGroups.value.filter(group =>
    group.toLowerCase().includes(keyword)
  )
})



const productList = ref([
  {
    id: 1,
    name: 'Sản phẩm A',
    type: 'Hàng hóa',
    sellingPrice: 100000,
    costPrice: 80000,
    trademark: 'Brand A',
    inventory: 12,
    image: 'https://via.placeholder.com/30'
  },
  {
    id: 2,
    name: 'Sản phẩm B',
    type: 'Dịch vụ',
    sellingPrice: 200000,
    costPrice: 150000,
    trademark: 'Brand B',
    inventory: 5,
    image: 'https://via.placeholder.com/30'
  }
])

</script>

<style scoped>


</style>