<template>
    <div class="payment_mode">
        <header-com :title="'用户结算'"></header-com>
        <div @click="selectAddress">
            <div class="address" v-if="address">
                <h4>{{address.userName + ' ' + address.userPhone}}</h4>
                <p>{{address.address + ' ' + address.detailAddress}}</p>
            </div>
            <div class="address" v-else>
                <div>
                    请选择收货地址
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_radio">
            <label class="weui-cell weui-check__label" for="x1">
                <div class="weui-cell__hd select-hd">
                    <input type="radio" @click="setPayMode(1)" class="weui-check" name="checkbox1" id="x1">
                    <i class="weui-icon-checked"></i>
                    <img src="https://s1.mi.com/m/images/m/pay_wx.png"/>
                </div>
                <div class="weui-cell__bd">
                    <p>微信支付</p>
                    <p>亿万用户的选择</p>
                </div>
            </label>
            <label class="weui-cell weui-check__label" for="x2">
                <div class="weui-cell__hd select-hd">
                    <input type="radio" @click="setPayMode(2)" class="weui-check" name="checkbox1" id="x2">
                    <i class="weui-icon-checked"></i>
                    <img src="https://s1.mi.com/m/images/m/pay_zfb2.png"/>
                </div>
                <div class="weui-cell__bd">
                    <p>支付宝</p>
                    <p>安全 可靠 放心</p>
                </div>
            </label>
            <label class="weui-cell weui-check__label" for="x3">
                <div class="weui-cell__hd select-hd">
                    <input type="radio" checked @click="setPayMode(0)" checked class="weui-check" name="checkbox1"
                           id="x3">
                    <i class="weui-icon-checked"></i>
                    <img src="https://s1.mi.com/m/images/m/pay_yl1.png"/>
                </div>
                <div class="weui-cell__bd">
                    <p>余额支付</p>
                    <p>随机立减</p>
                </div>
            </label>
        </div>
        <div class="weui-cells">
            <div class="weui-cell" v-for="item in shopcart">
                <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <img :src="item.goodsLogo" style="width: 50px;display: block">
                </div>
                <div class="weui-cell__bd">
                    <p style="text-overflow: ellipsis;margin-right: -80px">{{item.goodsName}}</p>
                    <p style="font-size: 13px;color: #888888;text-overflow: ellipsis;">{{item.goodsDescribe}}</p>
                </div>
                <div class="weui-cell__ft">
                    <p>
                        <span style="font-size: 12px">{{item.num}}x</span>
                        <span style="color: black">{{item.price.toFixed(2)}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="weui-flex">
                <div style="width: 50%;text-align: center">
                    <p style="color:#FF5722;">共1件 合计￥<span style="font-weight: 500">{{ getTotalPrise.toFixed(2)}}</span></p>
                </div>
                <div class="weui-actionsheet__cell weui-flex__item"
                     style="background-color: rgb(255, 102, 0); padding: 1.5px 0px;" @click="submit">去付款
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    const headerCom = require("../../components/header-com.vue");
    export default {
        data() {
            return {
                shopcart: [],
                payMode: 0,
                address: {}
            }
        },
        methods: {
            goToHome: function () {
                this.$router.push("/home/index");
            },
            setPayMode: function (value) {
                this.payMode = value;
            }
            ,
            selectAddress: function () {
                this.$router.push({path: "/address", query: {select: true}});
            }
            ,
            submit: function () {
                var self = this;
                var json = JSON.stringify(self.shopcart);
                var shopcarts = JSON.parse(json);
                var ids = self.$Enumerable.From(shopcarts).Select(s => s.id).ToArray();
                self.$http.post("Order", {
                    ShopCartID: ids,
                    PayMode: self.payMode,
                    AddressID: self.address.id
                }).then(r => {
                    if (r.body.status) {
                        sessionStorage.removeItem("shopcart");
                        weui.toast(r.body.message);
                        self.$router.push("/wxPaySuccess")
                    }
                    else
                        weui.topTips(r.body.message);
                })

            },
        },
        created: function () {
            var self = this;
            self.shopcart = JSON.parse(sessionStorage.getItem("shopcart"));
            self.address = JSON.parse(sessionStorage.getItem("address"));
            if (self.address == null)
                self.$http.get("Address/GetDefault").then(r => {
                    self.address = r.body.data;
                })
        },
        computed: {
            getTotalPrise: function () {
                var self = this;
                var price = 0;
                price = self.$Enumerable.From(self.shopcart).Sum(s => s.price * s.num);
                return price;
            },
            getTotalNum: function () {
                var self = this;
                var num = 0;
                prise = self.$Enumerable.From(self.shopcart).Sum(s => s.num);
                return num;
            }
        },
        mounted: function () {

        },
        components: {
            headerCom
        }
    }
</script>
<style lang="scss">
    .payment_mode {
        padding-bottom: 45px;
        .address {
            position: relative;
            background: #FFF url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAICAMAAACBHiwPAAAAA3NCSVQICAjb4U/gAAAArlBMVEX////5/f//+fn2+///9PPu9/7r9f7/8O/n9P3/6efg8P7/5uPZ7f3X7P3/3drJ5vz/2NTH5fzC4vz/087/zMez2/uv2fv/xb//wr2k1Pyi0/qe0Pr/urSc0PqTy/n/squPyvmNyfmLyPmJx/n/qqOHxfmFxfiDxPp9wfj/oZn/m5P/lo3/kIf/i4P/ioH/iX//iH3/h3z/hnv/hXr/g3n/g3b/gXb/f3T/fXL/eG1uSK+uAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAI5JREFUGJVdjtcSgkAQBBcwYg5gFuWMqBg4gv//Y5blrsVcv3Z1zRB9saNcIy364YbIcWaxoWl2j8ukExbWXG2QhjTN2wOaJLLZDPaYqKE0tNPQxK8ui9p6i9HCkWakjXOBGN881xZTuSTQPK91Nh2jUd7/3DLDc+mYhbMKjaGqNP2iyMu8z2K80wHpsfgATZArkBv6B5gAAAAASUVORK5CYII=') 0 0 repeat-x;
            padding: 20px;
            padding-right: 30px;
            border-bottom: 20px solid #f5f5f5;
            &:after {
                content: " ";
                display: inline-block;
                height: 6px;
                width: 6px;
                border-width: 2px 2px 0 0;
                border-color: #C8C8CD;
                border-style: solid;
                -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
                position: relative;
                top: -2px;
                position: absolute;
                top: 50%;
                margin-top: -4px;
                right: 20px;
            }
        }
        .weui-cells {
            .weui-cell__hd {
                input {
                    &:checked + .weui-icon-checked {
                        &:before {
                            content: '\EA06';
                            color: #09BB07;
                        }
                    }
                }
                .weui-icon-checked {
                    display: inline-block;
                    vertical-align: middle;
                    font: normal normal normal 14px/1 "weui";
                    font-size: inherit;
                    text-rendering: auto;
                    -webkit-font-smoothing: antialiased;
                    &:before {
                        content: '\EA01';
                        color: #C9C9C9;
                        font-size: 23px;
                    }
                }
            }

            .select-hd {
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
            .weui-cell__bd {
                padding-left: 5px;
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
        }
        .footer {
            position: fixed;
            bottom: 0px;
            left: 0px;
            right: 0px;
            height: 44px;
            width: 100%;
            line-height: 44px;
            box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);

            .weui-actionsheet__cell {
                color: #fff;
            }
        }

    }

</style>