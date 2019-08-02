<!-- The ref attr used to find the swiper instance -->
<template>
    <!--</swiper>-->
    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="(image,index) in images" :key="index">
            <img :src="image" onerror="javascript:this.src='../../img/pandadb.jpg'">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
    // swiper options example:
    export default {
        name: 'carrousel',
        props: {
            images: {
                type: Array,
                required: true,
                default: function () {
                    return [];
                }
            },
            swiperOption: {
                type: Object,
                required: false,
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                // ...
                default: function () {
                    return {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        slidesPerView: 0,
                        loop: true,
                        spaceBetween: 0,
                        effect: 'fade',
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false
                        },
                        // Enable lazy loading
                        // lazy: true,
                    };
                }
            }
        },
        methods: {
            // 存在的问题：如果默认图片也不存在，则继续触发 onerror，导致循环，故出现错误。如果图片存在，但网络很不通畅，也可能触发 onerror。
            // nofind: function () {
            //     var img = event.srcElement;
            //     img.src = "http://mat1.gtimg.com/cd/2017/home/nlogo0518.png"; //替换的图片
            //     img.οnerrοr = null; //控制不要一直触发错误
            // },

        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style>
    .swiper-container {
        width: 100%;
        /*height: 250px;*/
        max-height: 200px;
        margin-bottom: 10px;
    }
</style>
