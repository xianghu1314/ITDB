<template>
    <div class="lucky">
        <div v-if="goodsList.length==0" class="nolucky">
            <img src="img/nowin250.jpg" alt="">
            <br>
            <a href="/home" class="weui-btn weui-btn_mini weui-btn_warn">去夺宝</a>
        </div>
        <div class="youwin">
            <div class="weui-cells" style="margin-top: 0px">
                <div v-for="(item ,index) in goodsList" class="weui-item">
                    <div @click="calcPrise()" class="weui-cell" v-bind:for="index">
                        <div class="weui-cell__hd">
                            <img src="src/assets/logo.png" style="width:60px;margin-right:5px;display:block"/></div>
                        <div class="weui-cell__bd">
                            <p>{{item.name}}</p>
                            <p style="font-size: 13px; color: rgb(136, 136, 136);">{{item.describe}}</p>
                            <p style="font-size: 13px; color: rgb(136, 136, 136);">总需：10000</p>
                            <p style="font-size: 13px; color: rgb(136, 136, 136);">商品期数:567654</p>
                        </div>
                        <div class="weui-cell__ft">
                            <img src="img/xingyun.png"/></div>
                    </div>
                    <div class="list-describe">
                        <div class="list-describe-content">
                            <p>获奖者：陌冰曦</p>
                            <p>本次参与：20人次</p>
                            <p>幸运号：1314520</p>
                            <p>开奖时间：2017-07-07 12:12:12</p>
                            <i class="iconfont icon-fenxiang"></i>
                        </div>
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
                goodsList: [
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                ],
            }
        },
        methods: {},
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .lucky {
        width: 100%;
        height: 100%;
        .nolucky {
            padding: 10px;
            width: 100%;
            text-align: center;
        }
        .youwin {

        }
    }

    .weui-cells {
        background-color: #f4f4f4;
        .weui-item {
            background-color: white;
            margin-bottom: 10px;
            .list-describe {
                padding: 10px 20px;
                .list-describe-content {
                    background-color: #f4f4f4;
                    border-radius: 10px;
                    padding: 10px 20px;
                    p{
                        font-size: 13px;
                    }
                    position: relative;
                    i{
                        position: absolute;
                        right: 20px;
                        top: 40px;
                    }
                }
            }
        }
    }
</style>