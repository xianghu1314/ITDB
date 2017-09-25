<template>
    <div class="weui-tab">
        <div class="weui-tab__panel">
            <div class="weui-tab__content">反馈页</div>
            <div class="weui-tab__content">反馈页</div>
            <div class="weui-tab__content">反馈页</div>
            <div class="weui-tab__content">反馈页</div>
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>
        </div>
        <div class="weui-tabbar" id="navigation_tap">
            <router-link :to="'/home/index'" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-jingxuan weui-tabbar__icon" ></i>
                <p class="weui-tabbar__label">夺宝</p>
            </router-link>
            <router-link :to="'/home/newOpen'" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-shijian weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">最新</p>
            </router-link>
            <router-link :to="'/home/shopCart'" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-gouwuche weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">清单</p>

            </router-link>
            <router-link :to="'/home/mine'" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                 <i class="iconfont icon-wode weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            '$route' (to, from) {
                //动画
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

            }
        },
        mounted:function () {
            //根据地址判断选项
            var path=this.$route.path;
            var index=0;
            if(path.indexOf("/home/index")>=0){
                index=0
            }
            if(path.indexOf("/home/newOpen")>=0){
                index=1
            }
            if(path.indexOf("/home/shopCart")>=0){
                index=2
            }
            if(path.indexOf("/home/mine")>=0){
                index=3
            }
            weui.tab('#navigation_tap',{
                defaultIndex: index,
            });
        }
    }
</script>

<style>
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
        color: #f9650b;
    }
</style>