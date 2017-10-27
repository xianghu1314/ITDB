<template>
    <div class="payResult">
        <div class="icon-box">
            <i class="weui-icon-success weui-icon_msg"></i>
            <div class="icon-box__ctn">
                <h3 class="icon-box__title">支付成功</h3>
                <div class="goBtn">
                    <span @click="goToGoodsDetail()">继续购买</span>
                    <span>返回首页</span>
                </div>
            </div>
        </div>
        <div class="weui-panel" v-for="item in list">
            <div class="weui-panel__hd">成功参与{{item.dbNum}}人次</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">{{item.goodsName}}</h4>
                    <div class="weui-media-box__desc">
                        <p><span>商品期号：</span><span>{{item.periodsCode}}</span></p>
                        <p :style="{height:item.showAll==false?'50px':'auto'}" style="overflow: hidden">
                            <span>参与号码：</span>
                            <span v-for="item2 in item.tickets">{{item2}}</span>
                        </p>
                        <p style="text-align: center" @click="showAll(item)">
                            <i v-if="item.showAll==false" class="iconfont icon-xiala"></i>
                            <i class="iconfont icon-yincangdaohang" v-else></i>
                        </p>
                    </div>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">{{item.submitTime}}</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.ipCity}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            showAll: function (item) {
                item.showAll = !item.showAll;
            },
            goToGoodsDetail: function (id) {
                this.$router.push("/home/index");
            },
            GetCurrentPurchase: function (oid) {
                var self = this;
                self.$http.get("DBOrderDetail/GetCurrentPurchase", {params: {oid: 'fe665d66-0d39-46c6-9a0a-5fcf4f007afe'}}).then(r => {
                    var data = r.body.data;
                    data.forEach(item => {
                        item.showAll = false;
                    });
                    self.list = data;
                })
            }
        },
        created: function () {
            this.GetCurrentPurchase(this.$route.query.oid)
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .payResult {
        .icon-box {
            text-align: center;
            padding: 20px;
            .weui-icon_msg {
                font-size: 60px;
            }
            .goBtn {
                padding: 20px 0;
                span {
                    padding: 5px 20px;
                    border-radius: 3px;

                    &:first-child {
                        border: 1px solid #179B16;
                        background-color: white;
                        color: #179B16;
                    }
                    &:last-child {
                        border: 1px solid #179B16;
                        background-color: #179B16;
                        color: white;
                    }
                }
            }
        }
        .weui-panel {
            .weui-media-box__desc {
                h5 {
                    font-weight: normal;
                }
                p {
                    padding: 0px 5px;
                }
                span {
                    padding: 5px;
                    float: left;
                }
            }
        }
    }
</style>