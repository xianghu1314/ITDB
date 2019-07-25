<template>
    <div id="home">
        <search-com></search-com>
        <div class="weui-tab" id="categories_tab">
            <div class="weui-navbar">
                <div v-for="(item,index) in ConfigCategories"  @click="changeCategory(index)"
                     :class="{'weui-bar__item_on':CurrentIndex==index}" class="weui-navbar__item">
                    {{item.name}}{{CurrentIndex}}
                </div>
            </div>
            <div class="weui-tab__panel">
                <div class="weui-tab__content page_feedback">
                    <scroller :on-refresh="refresh"
                              :on-infinite="infinite">
                        <slider-com :images="Pages[CurrentIndex].sliders"></slider-com>
                        <navigation-com></navigation-com>
                        <scroll-caption-com></scroll-caption-com>
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh"
                              :on-infinite="infinite">
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" >
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" >
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" >
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" >
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
                <div class="weui-tab__content" style="display:none">
                    <scroller :on-refresh="refresh" :on-infinite="infinite" >
                        <multi-list-com v-bind:ArrayData="Pages[CurrentIndex].GoodsList"></multi-list-com>
                    </scroller>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const searchCom = require('../../components/search-com.vue');
    import sliderCom from '../../components/slider-com.vue';

    const navigationCom = require('../../components/navigation-com.vue');
    const scrollCaptionCom = require('../../components/scroll-caption-com.vue');
    const multiListCom = require('../../components/multi-list-com.vue');

    export default {
        name: 'home',
        data() {
            return {
                ConfigCategories: [],
                CurrentIndex: 0,
                Pages: [
                    {
                        GoodsList: [],
                        sliders: ["https://i8.mifile.cn/v1/a1/950d488e-8f41-2731-9da4-7e8aad9cb99b.webp?bg=BA4449", "https://i8.mifile.cn/v1/a1/f36d5d65-2f32-3945-33af-d5fff31e73f0.webp?bg=385293"]
                    }
                ],

            }
        },
        created: function () {
            this.getCategories();
        },
        methods: {
            refresh: function (done) {
                var self = this
                setTimeout(function () {
                    var start = self.top - 1
                    for (var i = start; i > start - 10; i--) {
                        self.Pages[self.CurrentIndex].GoodsList.splice(0, 0, {
                            logo: "https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                            title: "小米笔记本 加强版 新",
                            describes: "低调奢华",
                            Prise: 4999.00,
                            LotteryPrise: 10.00
                        });
                    }
                    self.top = self.top - 10;
                    done();
                }, 1500)
            },
            changeCategory: function (index) {
                this.CurrentIndex = index;
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
                        self.Pages[self.CurrentIndex].GoodsList.push({
                            logo: "https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                            title: "小米笔记本",
                            describes: "低调奢华",
                            Prise: 4999.00,
                            LotteryPrise: 10.00
                        });
                    }
                    self.bottom = self.bottom + 10;
                    done();
                }, 1500)
            },
            getCategories: function () {
                var self = this;
                self.$http.get("Config/getCategories").then(r => {
                    self.ConfigCategories = r.body.data;
                });
            }
        },
        mounted: function () {
            var self = this;
            weui.tab('#categories_tab', {
                defaultIndex: 0,
                onChange: function (index) {
                    //alert(index);
                    //self.CurrentIndex=index;
                }
            });
            for (var i = 1; i <= 20; i++) {
                self.Pages[self.CurrentIndex].GoodsList.push({
                    id:1,
                    logo: "https://i3.mifile.cn/a4/725a37e3-78b7-4298-8098-c40097bf179d",
                    title: "小米笔记本",
                    describes: "低调奢华",
                    Prise: 4999.00,
                    LotteryPrise: 10.00
                });
            }
            this.top = 1;
            this.bottom = 20;
        },
        components: {
            searchCom, sliderCom, navigationCom, scrollCaptionCom, multiListCom
        }
    }
</script>
<style>
    #home {
        height: 100%;
    }

    #home div {
        box-sizing: border-box;
    }

    #categories_tab .weui-navbar {
        background: white;
    }

    #categories_tab .weui-navbar .weui-navbar__item {
        background: none !important;
        color: #8f8f8f;
        padding: 4px 0;
    }

    #categories_tab .weui-navbar .weui-navbar__item:after, .weui-navbar:after {
        border: none;
    }

    #categories_tab .weui-navbar .weui-bar__item_on {
        color: #f9650b;
        background: linear-gradient(#f9650b, #f9650b) no-repeat !important;
        background-size: 50% 2px !important;
        background-position: bottom center !important;
    }

    .weui-navbar + .weui-tab__panel {
        padding-top: 35px;
    }
</style>