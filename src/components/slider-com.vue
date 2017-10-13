<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="config" class="swiper-box">
        <swiper-slide class="swiper-item" v-for="banner in images"><img :src="banner"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    // swiper options example:
    export default {
        name: 'carrousel',
        props: {
            config: {
                type: Object,
                default: function () {
                    return {
                        autoplay: 3000,
                        pagination: '.swiper-pagination',
                        direction: 'horizontal',
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 30,
                        mousewheelControl: true,
                        observeParents: true,
                    }
                },
            },
            images: {
                    type: Array,
                    required: true,
                    default:function () {
                        return [];
                    }
                },
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
        font-size: 18px;
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