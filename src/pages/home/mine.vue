<template>
    <div class="mine">
        <div class="user-info">
            <div class="user-head">
                <img src="https://team.weui.io/avatar/bear.jpg" alt="" @click="goToSetting()">
            </div>
            <div class="user-name">
                <!--<h4>陌冰曦</h4>-->
                <a href="/login" class="user-login-btn">登陆/注册</a>
            </div>
        </div>
        <div class="weui-cells" >

            <a href="javascript:;" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-icon" style="background-color: #cc3d4e"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>余额</p>
                </div>
            </a>
            <a href="javascript:;" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-shaidan" style="background-color: #6cdb56"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>晒单</p>
                </div>
            </a>
        </div>
        <div class="weui-cells" style="margin-top: 5px">
            <a href="javascript:;" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-duobaojilu" style="background-color: #8c72a4"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>夺宝记录</p>
                </div>
            </a>
            <a href="/lucky" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-zhongjiangjilu" style="background-color: #eeb468"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>中奖记录</p>
                </div>
            </a>
            <a href="/address" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-shouhuodizhi" style="background-color: #71c0c0"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>收货地址</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goToSetting:function () {
                this.$router.push({ path:"/setting"})
            }
        },
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .mine {
        background-color: #f4f4f4;
        .user-info{
            width: 100%;
            position: relative;
            background: url("../../../img/sky2.jpg") center top;
            background-size: cover;
            z-index:100;
            overflow: hidden;

            text-align: center;
            padding: 30px;
            box-sizing: border-box;
            /*不会把盒子撑开*/
            &:before {
                content: "";
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                z-index: -1;
                /*-1 可以当背景*/
                -webkit-filter: blur(5px);
                filter: blur(5px);
                margin: -30px;  /*消除边缘透明*/
                background: url("../../../img/sky2.jpg") center top;
                background-size: cover;
                /*平铺*/
                background-attachment: fixed;
                /*位置固定*/
            }
            .user-head{
               img{
                   height:80px;
                   width: 80px;
                   border-radius: 50px;
               }
            }
            .user-name{
                padding-top: 20px;
                .user-login-btn{
                    background-color: #cc3d4e;
                    color: white;
                    padding: 8px 30px;
                    border-radius: 4px;
                }
            }
        }

        .weui-cells{
            margin-top: 0px;
        }
        .iconfont {
            display: inline-block;
            vertical-align: middle;
            width: 26px;
            height: 26px;
            text-align: center;
            margin-right: 10px;
            line-height:26px;
            color: white;
            border-radius: 13px;
        }
        .home__avatar___3hB8h {
            display: block;
            margin-right: 10px;
            border-radius: 4px;
            width: 60px;
            height: 60px;
        }
    }

</style>