<template>
    <div class="weui-tab" id="navigation_tap">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <div class="weui-tabbar" id="navigation_tabbar">
            <router-link :to="'/home/index'" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-jingxuan weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">夺宝</p>
            </router-link>
            <router-link :to="'/home/newOpen'" class="weui-tabbar__item">
                <i class="iconfont icon-shijian weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">最新</p>
            </router-link>
            <router-link :to="'/home/shopCart'" class="weui-tabbar__item" style="position: relative;">
                <i class="iconfont icon-gouwuche weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">清单</p>
                <span class="weui-badge" style="position: absolute;top: .4em;right: 1.6em;">{{shopCartNum}}</span>
            </router-link>
            <router-link :to="'/home/mine'" class="weui-tabbar__item">
                <i class="iconfont icon-wode weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                transitionName: 'slide-left',
                shopCartNum:0
            }
        },
        watch: {
            '$route'(to, from) {
                //动画
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

            }
        },
        methods:{
            getshopCartNum: function (pid) {
                var self = this;
                self.$http.get("ShopCart/getshopCartNum?pid="+pid).then(res=>{
                    self.shopCartNum=res.body.data;
                })
            },
        },
        mounted: function () {
            this.getshopCartNum(0);
            //根据地址判断选项
            var path = this.$route.path;
            var index = 0;
            if (path.indexOf("/home/index") >= 0) {
                index = 0;
            }
            if (path.indexOf("/home/newOpen") >= 0) {
                index = 1
            }
            if (path.indexOf("/home/shopCart") >= 0) {
                index = 2;
            }
            if (path.indexOf("/home/mine") >= 0) {
                index = 3
            }
            weui.tab('#navigation_tabbar', {
                defaultIndex: index,
            });
        }
    }
</script>

<style>
    #navigation_tap {
        overflow: hidden;
    }

    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
        color: #f9650b;
    }
</style>