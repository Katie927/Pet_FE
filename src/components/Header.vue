<template>

    <section class="top-heading">
        <div class="slide-deal-header slick-initialized slick-slider">
            <button class="slick-prev slick arrow"> 

            </button>
            <div class="slick-list slide-deal-item draggeble">
                <a href="" class="deal-header">
                    <i icon-ChangeSolidOff></i>
                    <span>Thu cũ đổi mới</span>
                </a>
            </div>
            <button class="slick-next slick arrow">

            </button>
        </div>
    </section>
    <section class="w-container">
        <div class="logo-search-user">
            <div class="logo">
                <a href="#/">
                    <img src="@/assets/img/logo.svg" alt="">
                </a>
            </div>
            <div class="search">
                <div class="search-box">
                    <form action="/tim-kiem" method="get">
                        <div class="search-bg">
                            <input type="text" name="kwd" id="kwd" placeholder="Hôm nay bạn muốn tìm kiếm gì?">
                            <button type="submit">
                                <i class="icon-SearchSolidOff"></i>
                                <span>Tìm kiếm</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="search-sugget">
                    <strong>Từ khóa xu hướng</strong>
                    <a href="">Galaxy S25</a>
                    <a href="">Iphone 16</a>
                    <a href="">Galaxy S23 Ultra</a>
                    <a href="">Oppo Find X8</a>
                </div>
            </div>
            <div class="quick-for-user">
                <a href="" class="shop-location">
                    <i class="icon-location"></i>
                    <span>Tìm siêu thị</span>
                </a>
                <a href="#/login" class="member-login">
                    <i class="icon-UserSolidOff"></i>
                    <span>Tài khoản</span>
                </a>
                <a href="" class="cart text-link">
                    <i class="icon-CartSolidOff"></i>
                    <label for="" id="cart-total" class="cart-counter">0</label>
                </a>
            </div>

        </div>
    </section>

</template>


<script>
    import "@/assets/styles/header_style.css";
    import "@/assets/styles/style.css";
    import "@/assets/slick/slick.css";
    import "@/assets/slick/jquery-3.7.1.min.js";
    import "@/assets/slick/slick.min.js";

    export default{
        name: "HeaderComponent",

        data(){
            return{
                lastScrollPosition: 0,
                isHidden: false,
            }
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll)
        },
        beforeUnmount(){
            window.removeEventListener("scroll", this.handleScroll)
        },
        methods: {
            handleScroll() {
                let currentScroll = window.scrollY;
                if (currentScroll > this.lastScrollPosition) { // Cuộn xuống
                    this.isHidden = true;  
                    this.$emit("update-isHidden", this.isHidden);  // Phát sự kiện gửi giá trị lên App.vue
                    console.log("cuon xuong ")
                    console.log(this.isHidden)
                } else {    // Cuộn lên
                    this.isHidden = false;
                    this.$emit("update-isHidden", this.isHidden); 
                    console.log("len")
                    console.log(this.isHidden)
                }
                this.lastScrollPosition = currentScroll;
            },
        },  

    };
    

</script>
