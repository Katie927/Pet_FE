<template>

                 <!-- row-detail --> 
                 <tr id="'+showDetailProductId+'" class="row-detail row-detail-commodity" > 
                   <td class="cell-detail"> 
                     <div class="make-boder-table"></div> 
                     <div class="product-detail"> 
                       <div class="product-detail-container"> 
  
                         <!-- product-detail-body --> 
                         <div class="product-detail-body"> 
                                   <div class="identification-item"> 
                                     <h3 id="identificationProductName" class="identification-item-title">'+product.name+'</h3> 
                                   </div> 
  
                           <div class="form-wrapper product-detail-body-container"> 
                             <!-- product-detail-left --> 
                             <div class="product-detail-left"> 
                               <div class="profile-img-detail-large"> 
                                 <div class="wrap-img-detail-large"> 
                                   <img class="preview-img-detail-large" src="" 
                                     alt="Preview Image" /> 
                                 </div> 
                               </div> 
                               <div class="profile-img-detail-group"> 
                                 <div class="profile-img-detail"> 
                                   <div class="wrap-img-detail"> 
                                     <img class="preview-img-detail-1" src="" 
                                       alt="Preview Image" /> 
                                   </div> 
                                 </div> 
                                 <div class="profile-img-detail"> 
                                   <div class="wrap-img-detail"> 
                                     <img class="preview-img-detail-2" src="" 
                                       alt="Preview Image"  /> 
                                   </div> 
                                 </div> 
                                 <div class="profile-img-detail"> 
                                   <div class="wrap-img-detail"> 
                                     <img class="preview-img-detail-3" src="" 
                                       alt="Preview Image" /> 
                                   </div> 
                                 </div> 
                                 <div class="profile-img-detail"> 
                                   <div class="wrap-img-detail"> 
                                     <img class="preview-img-detail-4" src="" 
                                       alt="Preview Image" /> 
                                   </div> 
                                 </div> 
                                 <div class="profile-img-detail"> 
                                   <div class="wrap-img-detail"> 
                                     <img  class="preview-img-detail-5" src="" 
                                       alt="Preview Image" /> 
                                   </div> 
                                 </div> 
                                </div> 
                             </div> 
  
                             <!-- product detail right --> 
                             <div class="product-detail-right"> 
                             <div class="product-detail-right-content"> 
                               <!-- product-detail-indentification --> 
                               <div class="product-detail-identification"> 
                                 <!-- identification-group --> 
                                 <div class="identification-group"> 
                                   <div class="identification-item"> 
                                     <span class="identification-item-name">Mã hàng:</span> 
                                     <span
                                       class="identification-item-code">'+product.code+'</span> 
                                   </div> 
  
                                 <div class="identification-item"> 
                                   <span class="identification-item-name">Nhóm hàng:</span> 
                                   <span id="identificationProductGroup" class="identification-item-code">'+product.group+'</span> 
                                 </div> 
  
                                   <div class="identification-item"> 
                                     <span class="identification-item-name">Loại hàng:</span> 
                                     <span id="identificationproductproperties" class="identification-item-code">'+product.type+'</span> 
                                   </div> 
  
                                 <div class="identification-item"> 
                                   <span class="identification-item-name">Thương hiệu:</span> 
                                   <span id="identificationProductTrademark" class="identification-item-code">'+product.trademark+'</span> 
                                 </div> 
  
                                   <div class="identification-item"> 
                                     <span class="identification-item-name">Giá bán:</span>\n'
                                     <span id="identificationSellingPrice" class="identification-item-code">'+product.selling+'</span> 
                                   </div> 
  
                                   <div class="identification-item"> 
                                     <span class="identification-item-name">Giá vốn:</span> 
                                     <span id="identificationCostPrice" class="identification-item-code">'+product.cost+'</span> 
                                   </div> 
  
                                   <div class="identification-item"> 
                                     <span class="identification-item-name">Trọng lượng:</span> 
                                     <span id="identificationProductWeight" class="identification-item-code">'+product.weight+'</span> 
                                   </div> 
  
                                 <div class="identification-item"> 
                                   <span class="identification-item-name">Vị trí:</span>\n'
                                   <span id="identificationProductLocation" class="identification-item-code">'+product.location+'</span> 
                                 </div> 
  
                                 </div> 
                               </div> 
  
                             <!-- product-detail-description --> 
                             <div class="product-detail-description"> 
                               <div class="description-group"> 
                                 <div class="description-item"> 
                                   <span class="description-item-name">Mô tả</span> 
                                   <span id="descriptionProductDesc" class="description-item-code">'+product.desc+'</span> 
                                 </div> 
  
                                   <div class="description-item"> 
                                     <span class="description-item-name">Ghi chú đặt hàng</span> 
                                     <span id="descriptionProductNoteForm" class="description-item-code">'+product.noteform+'</span> 
                                   </div> 
  
                                   <div class="description-item"> 
                                     <span class="description-item-name">Nhà cung cấp</span> 
                                     <span id="descriptionProductSupplier" class="description-item-code"></span>\n'
                                   </div> 
  
                               </div> 
                             </div> 
                           </div> 
                         </div> 
                       </div>';
  
                           <!-- add-edit-product --> 
                           <div class="add-edit-product"> 
                             <button class="btn btn-success btn-success-bottom btn-edit-product" data-action="editCommodity" > 
                               <i class="btn-success-icon fas fa-solid fa-check-square"></i> 
                               <span>Cập nhật</span> 
                             </button> 
                             <button id="'+showStatusProduct+'" class="btn btn-red btn-red-bottom btn-lock-product" > 
                               <i class="btn-success-icon fas fa-solid fa-lock"></i> 
                               <span>Ngừng kinh doanh</span> 
                             </button> 
                             <button id="'+showRemoveProduct+'" class="btn btn-red btn-red-bottom btn-remove-product" > 
                               <i class="btn-success-icon fas fa-solid fa-trash-can"></i> 
                               <span>Xóa</span> 
                             </button> 
                             <button id="'+showMoreOperationProduct+'" class="btn btn-more btn-more-bottom btn-more-product" > 
                               <i class="btn-success-icon fas fa-solid fa-ellipsis-vertical"></i> 
                             </button> 
                   
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


</script>