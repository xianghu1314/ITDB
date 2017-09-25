<template>
    <div class="weui-tab">
        <div class="weui-tab__panel">
            <transition :name="transitionName">
                <router-view></router-view>
            </transition>
        </div>
        <div class="weui-tabbar" id="navigation_tap">
            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-jingxuan weui-tabbar__icon" ></i>
                <p class="weui-tabbar__label">夺宝</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-shijian weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">最新</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                <i class="iconfont icon-gouwuche weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">清单</p>

            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                <!--<img src="../assets/logo.png" alt="" class="weui-tabbar__icon">-->
                 <i class="iconfont icon-wode weui-tabbar__icon"></i>
                <p class="weui-tabbar__label">我的</p>
            </a>
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
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted:function () {
            var self=this;
            weui.tab('#navigation_tap',{
                defaultIndex: 0,
                onChange: function(index){
                    switch(index){
                        case 0:{
                            self.$router.push("/home/index");
                            break;
                        }
                        case 1:{
                            self.$router.push("/home/newOpen");
                            break;
                        }
                        case 2:{
                            self.$router.push("/home/shopCart");
                            break;
                        }
                        case 3:{
                            self.$router.push("/home/mine");
                            break;
                        }
                    }
                }
            });
        }
    }
</script>

<style>
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
        color: #f9650b;
    }
</style>