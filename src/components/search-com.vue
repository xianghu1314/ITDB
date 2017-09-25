<template>
    <div class="weui-search-bar" id="search_bar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" class="weui-search-bar__input" @click="searckClick" id="search_input" placeholder="搜索" />
                <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
            </div>
            <label for="search_input" class="weui-search-bar__label" id="search_text">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            }
        },
        methods: {
            searckClick:function (){
                this.$router.push("/search");
            }
        },
        mounted:function () {
            weui.searchBar('#search_bar');
        }
    }
</script>
<style>
    .swiper-slide >img{
        width: 100%;
    }
</style>