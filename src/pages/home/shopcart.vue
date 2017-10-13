<template>
    <div class="shopcart-page">
        <header-com :title="'购物车'" :btn="edit" :btn-text="ifEdit == false ? '编辑' : '完成'"></header-com>
        <div class="content">
            <scroller class="content-scr">
                <div class="weui-cells weui-cells_checkbox" v-if="shopCarList.length>0">
                    <div @click="calcPrise()" class="weui-cell weui-check__label" v-for="(item ,index) in shopCarList">
                        <label class="weui-cell__hd select-hd" v-bind:for="index">
                            <input type="checkbox" class="weui-check" name="checkbox1" v-bind:id="index">
                            <i class="weui-icon-checked"></i><img :src="item.goodsLogo"/>
                        </label>
                        <label class="weui-cell__bd" v-bind:for="index">
                            <p>{{ '【第' + item.periodsCode + '期】' + item.goodsName}}</p>
                            <p>{{item.goodsDescribe}}</p>
                        </label>
                        <div class="weui-cell__ft">
                            <br>
                            <div class="weui-flex">
                                <div class="weui-flex__item" v-on:click="sub(item,index)">-</div>
                                <div class="weui-flex__item">{{item.num}}</div>
                                <div class="weui-flex__item" v-on:click="add(item,index)">+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else style="text-align: center;padding: 40px 20%">
                    <i class="iconfont icon-gouwucheweikong-copy" style="color: #f9650b;font-size: 30px"></i>
                    <br>
                    <router-link to="/home/index" class="weui-btn weui-btn_mini weui-btn_default">去买点儿</router-link>
                </div>
            </scroller>
        </div>
        <div class="footer">
            <div class="weui-cells weui-cells_checkbox">
                <div class="weui-cell weui-check__label">
                    <label class="weui-cell__hd" for="all">
                        <input type="checkbox" id="all" class="weui-check" name="checkbox1" @click="selectAll">
                        <i class="weui-icon-checked"></i>
                        <span>全选</span>
                    </label>
                    <div class="weui-cell__bd">
                        合计<span style="color: #f9650b">￥<span
                            style="font-weight: 700;font-size: 20px">{{totalPrise}}</span></span>
                    </div>
                    <div class="weui-cell__ft">
                        <transition name="fade">
                            <div class="delete" v-if="ifEdit" @click="removeSelect">
                                移除
                            </div>
                            <div class="calc" v-else @click="paySelect">
                                结算
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shopCarList: [],
                ifEdit: false,
                totalPrise: 0
            }
        },
        methods: {
            add: function (item, index) {
                var self = this;
                self.$http.post("ShopCart/add", {ID: item.id}).then(response => {
                    if(response.body.status)
                        item.num++;
                    else
                        weui.topTips(response.body.message);
                })
            },
            sub: function (item, index) {
                var self = this;
                if (item.num > 1) {
                    self.$http.post("ShopCart/sub", {ID: item.id}).then(response => {
                        item.num--;
                    })
                }
            },
            edit: function () {
                this.ifEdit = !this.ifEdit;
                var checkbox = document.getElementsByTagName("input");
                for (var i = 0; i < checkbox.length - 1; i++) {
                    checkbox[i].checked = false;
                }
                this.calcPrise();
            },
            paySelect: function () {
                var selected = this.getSelected();
                if (selected.length < 1) {
                    weui.topTips("请勾选需要结算的商品");
                    return;
                }
                var json=JSON.stringify(selected);
                sessionStorage.setItem("shopcart",json)
                this.$router.push({ name: "paymentMode" });

            },
            removeSelect: function () {
                var self = this;
                var date = [];

                var checkbox = document.getElementsByTagName("input");
                for (var i = 0; i < checkbox.length - 1; i++) {
                    if (checkbox[i].checked == true) {
                        date.push({ID: self.shopCarList[i].id})
                    }
                }
                if (date.length == 0) {
                    weui.topTips("请选择需要购买的商品", 2000);
                }
                self.$http.post("ShopCart/delete", date).then(response => {
                    debugger
                    if (response.body.status == false)
                        weui.topTips("删除失败，请重试", 2000);
                    else
                        self.getShopCart();
                })
            },
            selectAll: function () {
                var checkbox = document.getElementsByTagName("input");
                var ifSelect = false;

                for (var i = 0; i < checkbox.length - 1; i++) {
                    if (checkbox[i].checked == false) {
                        ifSelect = true;
                        break;
                    }
                    ;
                }
                for (var i = 0; i < checkbox.length - 1; i++) {
                    checkbox[i].checked = ifSelect;
                }
                this.calcPrise();
            },
            calcPrise: function () {
                var self = this;
                var total = 0;
                var checkbox = document.getElementsByTagName("input");
                for (var i = 0; i < checkbox.length - 1; i++) {
                    if (checkbox[i].checked == true) {
                        total += self.shopCarList[i].num * self.shopCarList[i].price;
                    }
                }
                self.totalPrise = total;
            },
            getShopCart: function () {
                var self = this;
                self.$http.get("ShopCart/getShopCart").then(response => {
                    self.shopCarList = response.body.data;
                })
            },
            getSelected: function () {
                var self = this;
                var selected = [];
                var checkbox = document.getElementsByTagName("input");
                for (var i = 0; i < checkbox.length - 1; i++) {
                    if (checkbox[i].checked == true)
                        selected.push(self.shopCarList[i]);
                }
                return selected;
            }
        },
        created: function () {
            this.getShopCart();
        },
        computed: {},
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .shopcart-page {
        position: relative;
        line-height: 44px;
        box-sizing: border-box;
        padding: 0px 0px 54px 0px;
        height: 100%;
        .hidden {
            display: none;
        }
        .weui-cells {
            margin-top: 0px;
        }
        .content {
            height: 100%;
            .select-hd {
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                align-items: center;
                img {
                    width: 60px;
                    height: 60px
                }
            }
            .weui-cell__bd {
                padding-right: 5px;
                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    margin-right: -100px;

                    &:last-child {
                        -webkit-line-clamp: 2;
                        font-size: 13px;
                        color: rgb(136, 136, 136);
                        margin-right: 0px;
                    }
                }
            }
            .content-scr {
                position: inherit;
                .weui-flex__item {
                    border: 1px solid #e5e5e5;
                    padding: 5px;
                    text-align: center;
                    line-height: 15px;
                    width: 30px;
                    height: 25px;
                    box-sizing: border-box;
                    font-size: 12px;
                }
            }
        }
        .footer {
            display: flex;
            height: 44px;
            position: absolute;
            bottom: 0px;
            width: 100%;
            box-sizing: border-box;
            div {
                height: 100%;
            }
            .weui-cells {
                padding-left: 10px;
                line-height: 44px;
                width: 100%;
                .weui-cell {
                    padding: 0px;
                    height: 100%;
                    .weui-cell__hd {
                        display: flex;
                        align-items: center;
                    }
                    .weui-cell__bd {
                        text-align: right;
                        padding-right: 10px;

                    }
                    .weui-cell__ft {
                        .calc {
                            background-color: #f9650b;
                            padding: 0 45px;
                            color: #fff;
                        }
                        .delete {
                            background-color: #e53834;
                            padding: 0 45px;
                            color: #fff;
                        }

                    }
                }
            }
        }

    }
</style>