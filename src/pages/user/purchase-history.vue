<template>
    <div class="purchase-history">
        <header-com :title="'夺宝记录'"></header-com>
        <div class="weui-cells">
            <div class="weui-item" v-for="(item,index) in history">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img style="width: 60px; margin-right: 5px; display: block;"
                             :src="item.goodsLogo">
                    </div>
                    <div class="weui-cell__bd">
                        <p>{{item.goodsName}}</p>
                        <p style="font-size: 13px; color: rgb(136, 136, 136);">{{item.goodsName}}</p>
                        <p style="font-size: 13px; color: rgb(136, 136, 136);">商品期数：{{item.periodsCode}}</p>
                        <p style="font-size: 13px; color: rgb(136, 136, 136);">参与次数：{{item.times}}</p>
                    </div>
                    <div class="weui-cell__ft">
                        <a v-if="item.status===0" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">进行中</a>
                        <a v-else-if="item.status===1" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">待开奖</a>
                        <a v-else-if="item.status===2" href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">已开奖</a>
                        <a v-else href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">开奖失败</a>
                    </div>
                </div>
                <div class=" weui-cell__bm">
                    <div class="weui-flex">
                        <div class="weui-flex__item bar">
                            <div class="progress">
                                <div class="progressBar"
                                     :style="{'width':(item.needNum-item.overplusNum)/item.needNum*100+'%' }"></div>
                            </div>
                            <div class="weui-flex">
                                <div class="weui-flex__item">总需：{{item.needNum}}</div>
                                <div class="weui-flex__item">剩余{{item.overplusNum}}</div>
                            </div>
                        </div>
                        <!--<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" >在买点</a>-->
                    </div>
                    <div>
                        <label :for="'x'+index" class="shownumber">我的号码 <i class="iconfont icon-xiala"></i></label>
                        <!--0 进行中 1正在开奖中2开奖成功3开奖失败-->
                        <label v-if="item.status==2" :for="'xx'+index" class="shownumber">已开奖 <i class="iconfont icon-xiala"></i></label>
                    </div>
                    <input type="checkbox" :id="'x'+index">
                    <div class="list-describe">
                        <div class="list-describe-content">
                            <span v-for="item2 in item.tickets">{{item2}}</span>
                        </div>
                    </div>
                    <input type="checkbox" :id="'xx'+index">
                    <div class="list-describe">
                        <div class="list-describe-content"><p>获奖者：{{item.userName}}</p>
                            <p>本次参与：{{item.luckyCode}}人次</p>
                            <p>幸运号：{{item.luckyusertimes}}</p>
                            <p>开奖时间：{{item.openTime}}</p> <i class="iconfont icon-fenxiang"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .purchase-history {
        .weui-cells {
            margin: 0;
            background-color: #f4f4f4;
            .weui-item {
                background-color: #fff;
                margin-bottom: 10px;

                .weui-cell {
                }
                .weui-cell__bm {
                    width: 100%;
                    height: auto;
                    padding: 0 15px 10px 15px;
                    box-sizing: border-box;
                    align-items: center;
                    .bar {
                        .progress {
                            width: 100%;
                            border: 1px solid #ff2b00;
                            height: 5px;
                            border-radius: 2.5px;
                            box-shadow: 0px 0px 1px #fd5300 inset;
                            .progressBar {
                                height: 100%;
                                border-radius: .25rem;
                                background: -webkit-linear-gradient(left, #ff6419, #ff2b00);
                                background: -moz-linear-gradient(left, #ff6419, #ff2b00);
                            }

                        }
                        .weui-flex {
                            font-size: 12px;
                            margin-top: 5px;
                            div {
                                color: rgb(136, 136, 136);
                                &:last-child {
                                    text-align: right;
                                }
                            }
                        }
                    }

                    a {
                        margin-left: 10px
                    }
                    .shownumber {
                        font-size: 12px;
                        color: rgb(136, 136, 136);
                    }
                    input {
                        display: none;
                        &:checked + .list-describe {
                            display: block;

                        }
                    }
                    .list-describe {
                        display: none;
                        transition: display 3s;
                        -moz-transition: display 3s; /* Firefox 4 */
                        -webkit-transition: display 3s; /* Safari 和 Chrome */
                        -o-transition: display 3s; /* Opera */

                        padding: 10px 20px;
                        .list-describe-content {
                            background-color: #f4f4f4;
                            border-radius: 10px;
                            padding: 10px 10px;
                            overflow: hidden;
                            p, span {
                                font-size: 13px;
                                padding: 0 5px;
                            }
                            span {
                                float: left;
                            }
                            position: relative;
                            i {
                                position: absolute;
                                right: 20px;
                                top: 40px;
                            }

                        }

                    }

                }
            }

        }
    }
</style>

<script>
    export default {
        data() {
            return {
                history: []
            }
        },
        methods: {
            getPurchaseHistory: function () {
                var self = this;
                self.$http.get("DBOrderDetail/GetPurchaseHistory").then(r => {
                    self.history = r.body.data;
                });
            }
        },
        created: function () {
            this.getPurchaseHistory();
        },
        mounted: function () {

        }
    }
</script>