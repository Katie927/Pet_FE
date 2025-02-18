<template>

    <section class="top-heading">
        <div class="slide-deal-header slick-initialized slick-slider">
            <button>

            </button>
            <div class="slick-list draggeble">

            </div>
            <button>

            </button>
        </div>
    </section>
    <section class="w-container">
        <div class="logo-search-user">
            <div class="logo">
                <a href="../index.html">
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
                <a href="" class="member-login">
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
    export default{
        name: "HeaderComponent"
    };
</script>
