<template>
    <div class="category">
        <search-com></search-com>
        <div class="weui-flex category-content">
            <div class="category-left">
                <scroller class="category-left-scr">
                    <div class="weui-cells" style="margin: 0">
                        <div class="weui-cell" v-for="item in categoryRoot" v-bind:class="{active:current==item}"
                             @click="setCurrent(item)">
                            <div class="weui-cell__bd">
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
            <div class="weui-flex__item category-right">
                <scroller class="category-right-scr">
                    <div class="banner">
                        <img v-bind:src="current.bannerLogo"  />
                    </div>
                    <div class="weui-loadmore weui-loadmore_line" style="margin-bottom: 0">
                        <span class="weui-loadmore__tips">{{current.name}}</span>
                    </div>
                    <div class="weui-grids">
                        <a href="javascript:;" v-for="item in categoryChild" @click="gotogoodslist(item.id)"
                           class="weui-grid">
                            <div class="weui-grid__icon">
                                <img :src="item.logo" height="28" width="28"/>
                            </div>
                            <p class="weui-grid__label">
                                {{item.name}}
                            </p>
                        </a>
                    </div>
                </scroller>
            </div>
        </div>
    </div>
</template>

<script>
    const searchCom = require('../../components/search-com.vue');
    export default {
        data() {
            return {
                current: {},
                category: [],
                categoryChild: []
            }
        },
        methods: {
            setCurrent: function (item) {
                var self=this;
                self.current = item;
                self.categoryChild=self.$Enumerable.From(self.category).Where(i=>i.parentCategoryID==item.id).ToArray();
            },
            gotogoodslist: function (id) {
                this.$router.push({path: "/goodsList", query: {cid: id}});
            }
        },
        created: function () {
            var self = this;
            self.$http.get("Category/GetCategory").then(response => {
                self.category = response.body.data;
                var current=self.$Enumerable.From(self.category).First();
                self.setCurrent(current);
            })
        },
        mounted() {

        }
        ,
        computed: {
            "categoryRoot": function () {
                return this.$Enumerable.From(this.category).Where(function (x) {
                    return x.parentCategoryID == null
                }).ToArray();
            }
        },
        components: {
            searchCom
        },

    }
</script>

<style lang="scss">
    .category {
        height: 100%;
        div: {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .category-content {
            height: 100%;
            .category-left {
                min-width: 100px;
                height: 100%;
                border-right: 1px solid rgb(229, 229, 229);
                .category-left-scr {
                    position: inherit;
                    text-align: center;
                }
                .active {
                    color: #f9650b;
                    font-size: 18px;
                }
            }
            .category-right {
                padding: 10px;
                width: calc(100vw - 100px);
                box-sizing: border-box;
                .category-right-scr {
                    position: inherit;
                    text-align: center;
                }
                .banner {
                    position: relative;
                    width: 100%;
                    height: calc((100vw - 100px) * 0.382);
                    overflow: hidden;
                    border-radius: 15px;
                    z-index: 100;
                    img {
                        transform: translate(-50%, -50%);
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        position: absolute;
                        width: 100%;
                    }
                }
                .weui-grids {
                    &:before {
                        display: none;
                    }
                    &:after {
                        display: none;
                    }
                    .weui-grid {
                        border: none;
                        &:before {
                            display: none;
                        }
                        &:after {
                            display: none;
                        }
                    }
                }
            }
        }
    }
</style>