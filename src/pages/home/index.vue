<template>
    <div id="home">
        <search-com></search-com>
        <div class="weui-tab" id="categories_tab">
            <div class="weui-navbar" id="categories_navbar">
                <div v-for="(item,index) in ConfigCategories" :class="{'weui-bar__item_on':CurrentIndex==index}" class="weui-navbar__item">
                    {{item.name}}
                </div>
            </div>
            <div>
                <scroller :on-refresh="refresh" :on-infinite="infinite" :noDataText="'没有更多了'" ref="my_scroller">
                    <slider-com :images="sliders"></slider-com>
                    <navigation-com></navigation-com>
                    <scroll-caption-com></scroll-caption-com>
                    <multi-list-com v-bind:ArrayData="GoodsList" ref="my_multi"></multi-list-com>
                </scroller>
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
                ConfigCategories: [{
                    data: "0",
                    id: 0,
                    ifShow: true,
                    name: "全部",
                    sort: 0,
                    url: "",
                }],
                CurrentIndex: 0,
                pageIndex: 0,//分开
                pageSize: 20,
                sliders: [],
                GoodsList: [],
            }
        },
        created: function () {


            this.getCategories();
            this.getSliders();
        },
        methods: {
            //下拉
            refresh: function (done) {
                var self = this
                self.pageIndex = 0;
                self.pageSize = 20;
                self.getGoods(function () {
                    self.$refs.my_scroller.finishPullToRefresh()
                });
            },
            changeCategory: function (index) {
                var self = this;
                self.CurrentIndex = index;
                self.pageIndex = 0;
                self.pageSize = 20;
                self.getGoods(function () {
                    self.$refs.my_scroller.finishPullToRefresh()
                });
            },
            //上拉
            infinite: function (done) {
                var self = this
                self.getGoods(function () {
                    self.$refs.my_scroller.finishInfinite(true);
                });
            },
            getCategories: function () {
                var self = this;
                self.$http.get("Config/getCategories").then(r => {
                    self.ConfigCategories = self.ConfigCategories.concat(r.body.data);
                    setTimeout(function () {
                        weui.tab('#categories_navbar',{
                            defaultIndex: 0,
                            onChange: function(index){
                                self.CurrentIndex = index;
                                self.pageIndex = 0;
                                self.pageSize = 20;
                                self.getGoods(function () {
                                    self.$refs.my_scroller.finishPullToRefresh()
                                });
                            }
                        });
                    },100)
                });
            },
            getSliders: function () {
                var self = this;
                self.$http.get("Config/getSliders").then(r => {
                    self.sliders = r.body.data.map(item => item.imgUrl);
                });
            },
            getGoods: function (callback) {
                var self = this;
                self.$http.get("DBPeriods/GetDBPeriods", {
                    params: {
                        CategoryId: (self.ConfigCategories[self.CurrentIndex] || {}).id,
                        PageIndex: self.pageIndex,
                        PageSize: self.pageSize
                    }
                }).then(r => {
                    if (callback && typeof callback === 'function') callback();

                    if (!r) {
                        weui.toast('获取失败', 3000);
                        return
                    }
                    if (self.pageIndex === 0) {
                        self.$refs.my_multi.clean();
                        self.GoodsList = r.body.data;

                    } else {
                        if (r.body.data.length === 0) {
                            weui.toast('没有更多了', 3000);
                        } else {
                            self.GoodsList = self.GoodsList.concat(r.body.data);
                        }
                    }
                });
            }
        },
        mounted: function () {

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
    #home .pull-to-refresh-layer{
        height: 92px;
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

</style>