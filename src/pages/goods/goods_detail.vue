<template>
    <div class="goodsDetail">
        <div style="padding-bottom: 40px;height: 100%;overflow: auto;box-sizing: border-box">
            <slider-com :images="period.goodsLogo2"></slider-com>
            <div class="goods">
                <p class="title">{{period.goodsName}}</p>
                <p class="describe">{{period.goodsDescribe}}</p>
                <div class="progress">
                    <div class="progressBar"
                         :style="{'width':(period.needNum-period.overplusNum)/period.needNum*100+'%' }"></div>
                </div>
                <div class="information">
                    <div class="item">
                        <p>{{period.needNum}}</p>
                        <p>总需</p>
                    </div>
                    <div class="item">
                        <p>{{period.needNum - period.overplusNum}}</p>
                        <p>已参与</p>
                    </div>
                    <div class="item">
                        <p>{{period.overplusNum}}</p>
                        <p>剩余</p>
                    </div>
                </div>
            </div>
            <div class="tips">试一试？万一中了呢！</div>
            <div class="share">
                <div class="share-title">
                    中奖分享(1231)
                </div>
                <div class="share-content">
                    <div class="user-info">
                        <img src="img/logo.png"/>
                        <span>皮皮虾</span>
                    </div>
                    <div class="share-item">
                        <p class="describe">等待呢三生三世，穿越了十里八方，只为与你有一场美丽的邂逅。</p>
                        <div class="picture">
                            <div class="img">
                                <img src="img/logo.png" alt="">
                            </div>
                            <div class="img">
                                <img src="img/logo.png" alt="">
                            </div>
                            <div class="img">
                                <img src="img/logo.png" alt="">
                            </div>
                            <div class="img">
                                <img src="img/logo.png" alt="">
                            </div>
                            <div class="img">
                                <img src="img/logo.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="share">
                <div class="share-title">
                    参与记录
                </div>
                <div class="weui-cells" style="margin-top: 0px">
                    <div class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                                 alt="" style="width:20px;margin-right:5px;display:block"></div>
                        <div class="weui-cell__bd">
                            <p>陌冰曦 <span>重庆(192.168.0.1)</span></p>
                            <p>2017-09-01 23:12:12</p>
                        </div>
                        <div class="weui-cell__ft">7人次</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                                 alt="" style="width:20px;margin-right:5px;display:block"></div>
                        <div class="weui-cell__bd">
                            <p>陌冰曦 <span>重庆(192.168.0.1)</span></p>
                            <p>2017-09-01 23:12:12</p>
                        </div>
                        <div class="weui-cell__ft">7人次</div>
                    </div>
                </div>
            </div>
            <div class="tips" style="color: #f56600">图文详情</div>
            <div class="image-text" v-html="period.goodsDetail">
                <!--商品详情-->
            </div>
        </div>
        <div class="bottom">
            <div class="weui-flex">
                <div style="width: 80px;border-right: 1px solid #ddd;" @click="goToHome"><i
                        class="iconfont icon-shouye"></i> 首页
                </div>
                <div style="width: 80px;padding-left: 5px;position: relative;" @click="goToShopCart"><i class="iconfont icon-gouwuche"></i>
                    购物车
                    <span class="weui-badge" style="position: absolute;top: -.2em;right: -.4em;">{{shopCartNum}}</span>
                </div>
                <div class="weui-actionsheet__cell weui-flex__item" style="background-color:#f60;padding: 1.5px 0;"
                     @click="openActionSheet('join')">加入购物车
                </div>
            </div>
        </div>
        <div id="actionSheet_wrap">
            <div class="weui-mask weui-mask_transparent actionsheet__mask" v-bind:class="{'hidden':actionSheet==false}"
                 @click="closeActionSheet"></div>
            <div class="weui-actionsheet" v-bind:class="{'weui-actionsheet_toggle':actionSheet}">
                <div class="weui-actionsheet__title">
                    <p class="weui-actionsheet__title-text">夺宝有风险，参与需谨慎！</p>
                </div>
                <div class="weui-actionsheet__menu">
                    <div class="join">
                        <div><span @click="sub">-</span><span style="padding:6px 40px">{{selectNum}}</span><span
                                @click="add">+</span></div>
                    </div>
                    <div class="tips">每参与1人次，需要1元</div>
                    <div class="join">
                        <div>
                            <span @click="setNum(5)">5</span><span @click="setNum(10)">10</span><span
                                @click="setNum(20)">20</span><span @click="setNum(50)">50</span><span
                                @click="setNum(100)">100</span>
                        </div>
                    </div>
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell success-btn" @click="submit">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const sliderCom = require('../../components/slider-com.vue');

    export default {
        data() {
            return {
                actionSheet: false,
                period: {},
                selectNum: 1,
                shopCartNum:0,
                goToWhere: ''//跳转 now直接购买，join加入购物车
            }
        },
        methods: {
            openActionSheet: function (where) {

                this.actionSheet = true;
                this.goToWhere = where;
//                iosActionsheet.className+=" weui-actionsheet_toggle";
            },
            closeActionSheet: function () {
                this.actionSheet = false;
            },
            goToShopCart: function () {
                this.$router.push({path: '/home/shopCart'})
            },
            getshopCartNum: function (pid) {
                var self = this;
                self.$http.get("ShopCart/getshopCartNum?pid="+pid).then(res=>{
                    self.shopCartNum=res.body.data;
                })
            },
            goToHome: function () {
                this.$router.push({path: '/home/index'})
            }
            ,
            submit: function () {
                var self = this;
                if (self.period.overplusNum < 1) {
                    weui.topTips("该商品次数已满，请选择下一期参与夺宝！");
                    return;
                }
                self.$http.post("ShopCart/join", {
                    DBPeriodsID: self.period.id,
                    Num: self.selectNum,
                    Price: self.period.perPrice,
                    GoodsID: self.period.goodsID
                }).then(response => {
                    if (response.body.status) {
                        weui.toast(response.body.message, 3000);
                        // 获取购物车数量
                        this.getshopCartNum(self.period.id);
                        this.closeActionSheet();
                    } else {
                        weui.topTips(response.body.message)
                    }

                })

            },
            getGoodsDetail: function (id) {
                var self = this;
                self.$http.get("DBPeriods/" + id).then(response => {
                    response.body.data.goodsLogo2 = response.body.data.goodsLogo2.split(',')
                    self.period = response.body.data;
                })
            },
            setNum: function (num) {
                if (this.period.overplusNum > num)
                    this.selectNum = num;
                else
                    this.selectNum = this.period.overplusNum;
            },
            add: function () {
                if (this.period.overplusNum > this.selectNum)
                    this.selectNum++;
            },
            sub: function () {
                if (this.selectNum > 1)
                    this.selectNum--;
            },
        },
        created: function () {
            var id = this.$route.query.id;
            this.getGoodsDetail(id);
            this.getshopCartNum(id);
        },
        mounted: function () {
        },
        components: {
            sliderCom,
        }
    }
</script>

<style lang="scss">
    .goodsDetail {
        .hidden {
            display: none;
        }
        background-color: #f1f1f1;
        position: relative;
        .goods {
            margin: 0px 0;
            background-color: #fff;
            padding: 10px;
            .title {
                padding: 10px 0px;
                font-size: 16px;
                font-weight: bold;
            }
            .describe {
                color: #686868;
                padding: 10px 0;
            }
            .progress {
                width: 100%;
                border: 1px solid #ff2b00;
                height: 5px;
                border-radius: 2.5px;
                box-shadow: 0px 0px 1px #fd5300 inset;
                .progressBar {
                    height: 100%;
                    width: 50%;
                    border-radius: .25rem;
                    background: -webkit-linear-gradient(left, #ff6419, #ff2b00);
                    background: -moz-linear-gradient(left, #ff6419, #ff2b00);
                }
            }
            .information {
                display: -webkit-box;
                display: -webkit-flex;
                display: flex;
                .item {
                    flex: 1;
                    text-align: center;
                    &:first-child {
                        text-align: left;
                    }
                    &:last-child {
                        text-align: right;
                        p {
                            &:first-child {
                                color: #ff2b00;
                            }
                        }
                    }
                }

            }
        }
        .tips {
            background-color: white;
            text-align: center;
            color: #686868;
            margin: 5px 0;
            line-height: 40px;
            padding: 5px;
            font-size: 18px;
        }
        .share {
            .share-title {
                padding: 10px;
                margin-top: 5px;
                background-color: white;
                position: relative;
                border-bottom: 1px solid #eee;
                &:after {
                    content: " ";
                    display: inline-block;
                    height: 6px;
                    width: 6px;
                    border-width: 2px 2px 0 0;
                    border-color: #c8c8cd;
                    border-style: solid;
                    -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
                    transform: matrix(.71, .71, -.71, .71, 0, 0);
                    position: relative;
                    top: -2px;
                    position: absolute;
                    top: 50%;
                    margin-top: -4px;
                    margin-right: 10px;
                    right: 2px;
                }
            }
            .share-content {
                background-color: #fff;
                .user-info {
                    padding: 10px;
                    display: flex;

                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 25px;
                    }
                    span {
                        align-content: center;
                        line-height: 50px;
                    }
                    .share-ip {
                        p {
                            line-height: 25px;
                            margin: 0;
                            padding: 0;
                            height: 25px;
                            display: inline-block;
                        }
                    }
                }
                .share-item {
                    padding: 10px;
                    .describe {
                        padding: 0px;
                    }
                    .picture {
                        overflow: hidden;
                        .img {
                            width: 100px;
                            height: 100px;
                            position: relative;
                            overflow: hidden;
                            float: left;
                            margin: 5px;
                            img {
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                -webkit-transform: translate(-50%, -50%);;
                                -moz-transform: translate(-50%, -50%);;
                                -ms-transform: translate(-50%, -50%);;
                                -o-transform: translate(-50%, -50%);;
                                transform: translate(-50%, -50%);;

                            }
                        }
                    }
                }
            }
        }

        .image-text {
            width: 100%;
            div, img, p {
                width: 100%;
            }
        }
        .bottom {
            position: fixed;
            bottom: 10px;
            width: 100%;
            text-align: center;
            color: rgba(0, 0, 0, .72);
            font-weight: bold;
            font-size: 16px;
            line-height: 40px;
            z-index: 1001;
            .weui-flex {
                border-radius: 10px;
                overflow: hidden;
                margin: 0 10px;
                box-sizing: border-box;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);
                padding: 5px 0;
                font-size: 14px;
                background-color: #fff;
            }
            .weui-flex__item {
                color: #fff;
                font-size: 14px;
                font-weight: normal;
                border-radius: 22px;
                margin: 0 30px;
            }
        }

    }

    .weui-actionsheet__menu {
        padding: 20px 0;
        span:active {
            color: rgba(0, 0, 0, 0.6);
            background-color: #DEDEDE;
        }
        .tips {
            color: #888;
            text-align: center;
            font-size: 14px;
        }
        .join {
            display: flex;
            justify-content: center;
            text-align: center;
            margin-top: 10px;
            div {
                span {
                    padding: 6px 20px;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.2);
                    &:first-child {
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }
                    &:last-child {
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;

                    }
                }
            }
        }
    }

    .weui-actionsheet__action {
        padding: 10px;

        .weui-actionsheet__cell {
            padding: 3px 14px;
            margin: 0 30px;
            box-sizing: border-box;
            color: white;
            border-radius: 10px;

        }
        .success-btn {
            background-color: #1AAD19 !important;
            margin-bottom: 10px;
            &:active {
                color: rgba(255, 255, 255, 0.6);
                background-color: #179B16;
            }
        }
        .error-btn {
            background-color: #E64340;
            &:active {
                color: rgba(255, 255, 255, 0.6);
                background-color: #CE3C39;
            }
        }
    }
</style>