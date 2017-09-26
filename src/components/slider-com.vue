<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="swiperOption" class="swiper-box" :not-next-tick="true" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="banner in banners"><img :src="banner"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    // swiper options example:
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    direction: 'horizontal',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 30,
                    mousewheelControl: true,
                    observeParents:true,
                },
                banners: [ '../img/slider.jpg', '../img/slider.jpg', '../img/slider.jpg' ],

            }
        },
        // you can find current swiper instance object like this, while the notNextTick property value must be true
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // you can use current swiper instance object to do something(swiper methods)
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style>
    .swiper-box {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .swiper-item {
        height: 100%;
        text-align: center;
        font-size: 18px ;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>