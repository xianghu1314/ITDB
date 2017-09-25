<template>
    <div id="home">
        <search-com></search-com>
        <div class="weui-tab" id="categories_tab">
            <div class="weui-navbar">
                <div class="weui-navbar__item weui-bar__item_on">
                    推荐
                </div>
                <div class="weui-navbar__item">
                    手机
                </div>
                <div class="weui-navbar__item">
                    电脑
                </div>
                <div class="weui-navbar__item">
                    智能
                </div>
                <div class="weui-navbar__item">
                    电视
                </div>
                <div class="weui-navbar__item">
                    游戏
                </div>
                <div class="weui-navbar__item">
                    生活
                </div>
            </div>
            <div class="weui-tab__panel">
                <div class="weui-tab__content page_feedback">
                    <scroller :on-refresh="refresh"
                              :on-infinite="infinite"
                              style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <navigation-com></navigation-com>
                        <scroll-caption-com></scroll-caption-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh"
                              :on-infinite="infinite"
                              style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" style="padding-top: 35px;">
                        <slider-com></slider-com>
                        <multi-list-com v-bind:ArrayData="items"></multi-list-com>
                    </scroller>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const  searchCom=require('../../components/search-com.vue');
    const  sliderCom=require('../../components/slider-com.vue');
    const  navigationCom=require('../../components/navigation-com.vue');
    const  scrollCaptionCom=require('../../components/scroll-caption-com.vue');
    const  multiListCom=require('../../components/multi-list-com.vue');

    export default {
        name: 'home',
        data () {
            return {
                items: []
            }
        },

        methods: {
            refresh: function (done) {
                var self = this
                setTimeout(function () {
                    var start = self.top - 1
                    for (var i = start; i > start - 10; i--) {
                        self.items.splice(0, 0, {
                            logo:"https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                            title:"小米笔记本 加强版 新",
                            describes:"低调奢华",
                            Prise:4999.00,
                            LotteryPrise:10.00});
                    }
                    self.top = self.top - 10;
                    done();
                }, 1500)
            },

            infinite: function (done) {
                if (this.bottom >= 100) {
                    setTimeout(() => {
                        done(true)
                    }, 1500)
                    return;
                }
                var self = this
                setTimeout(function () {
                    var start = self.bottom + 1;
                    for (var i = start; i < start + 10; i++) {
                        self.items.push({
                            logo:"https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                            title:"小米笔记本",
                            describes:"低调奢华",
                            Prise:4999.00,
                            LotteryPrise:10.00});
                    }
                    self.bottom = self.bottom + 10;
                    done();
                }, 1500)
            }
            },
        mounted:function () {
            weui.tab('#categories_tab',{
                defaultIndex: 0,
                onChange: function(index){

                }
            });
            for (var i = 1; i <= 20; i++) {
                this.items.push({
                    logo:"https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                    title:"小米笔记本",
                    describes:"低调奢华",
                    Prise:4999.00,
                    LotteryPrise:10.00});
            }
            this.top = 1;
            this.bottom = 20;
        },
        components:{
            searchCom,sliderCom,navigationCom,scrollCaptionCom,multiListCom
        }
    }
</script>
<style>
    #home{
        height: 100%;
    }
    #home div{
        box-sizing: border-box;
    }
    #categories_tab .weui-navbar{
        background: white;
    }
    #categories_tab .weui-navbar .weui-navbar__item{
        background: none!important;
        color: #8f8f8f;
        padding: 4px 0;
    }
    #categories_tab .weui-navbar .weui-navbar__item:after,.weui-navbar:after{
        border: none;
    }
    #categories_tab .weui-navbar .weui-bar__item_on{
        color:#f9650b ;
        background: linear-gradient(#f9650b , #f9650b) no-repeat !important;
        background-size:50% 2px!important;
        background-position: bottom center!important;
    }
    .weui-navbar+.weui-tab__panel {
        padding-top: 35px;
    }
</style>