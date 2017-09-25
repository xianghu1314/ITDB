<template>
    <div class="weui-flex">
        <div class="weui-flex__item" v-for="item in ItemList" >
            <a v-bind:href="item.href"  class="weui-tabbar__item">
                <img :src="item.src" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">{{item.title}}</p>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                ItemList:[
                    {src:'../img/夺宝_03.png',title:'宝贝分类',href:'/category'},
                    {src:'../img/夺宝_05.png',title:'中奖记录',href:'/lucky'},
//                    {src:'../img/logo.png',title:'爆款商品'},
                    {src:'../img/夺宝_07.png',title:'分享晒单',href:'/share'},
                    {src:'../img/夺宝_09.png',title:'夺宝须知',href:'/help'},
                    ]
            }
        },
        methods: {},
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style>

</style>