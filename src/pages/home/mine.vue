<template>
    <div class="mine">
        <div class="user-info">
            <div class="user-head">
                <img v-bind:src="user.userLogo" @click="goTo('/setting')">
            </div>
            <div class="user-name">
                <h4 v-if="user.userName" style="color: #fff;">{{user.userName}}</h4>
                <router-link v-else :to="'/login'" class="user-login-btn">登陆/注册</router-link>
            </div>
        </div>
        <div class="weui-cells">
            <a href="javascript:;" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-icon" style="background-color: #cc3d4e"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>余额</p>
                </div>
                <div class="weui-cell__ft">
                    <span>{{user.userBalance}}</span>
                </div>
            </a>
            <!--<a href="javascript:;" class="weui-cell weui-cell_access">-->
                <!--<div class="weui-cell__hd">-->
                    <!--<i class="iconfont icon-shaidan" style="background-color: #6cdb56"></i>-->
                <!--</div>-->
                <!--<div class="weui-cell__bd">-->
                    <!--<p>晒单</p>-->
                <!--</div>-->
            <!--</a>-->
            <a @click="goTo('/lucky')" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-zhongjiangjilu" style="background-color: #eeb468"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>中奖记录</p>
                </div>
            </a>
        </div>
        <div class="weui-cells" style="margin-top: 5px">
            <a href="javascript:;" @click="goTo('/purchaseHistory')" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <i class="iconfont icon-duobaojilu" style="background-color: #8c72a4"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>夺宝记录</p>
                </div>
            </a>
            <!--<a @click="goTo('/lucky')" class="weui-cell weui-cell_access">-->
                <!--<div class="weui-cell__hd">-->
                    <!--<i class="iconfont icon-zhongjiangjilu" style="background-color: #eeb468"></i>-->
                <!--</div>-->
                <!--<div class="weui-cell__bd">-->
                    <!--<p>中奖记录</p>-->
                <!--</div>-->
            <!--</a>-->
            <a @click="goTo('/address')" class="weui-cell weui-cell_access">
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
            return {
                user: { userLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2N2VjM2IxOS1mOTMyLTExNDUtYjQ4NC0xMjFiYzk0NmM2YWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I3MEI5QTkwRTIyMTFFNzg4QkNEQzlBMUIwQ0VDNzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0IzOTU1MzQwRTIyMTFFNzg4QkNEQzlBMUIwQ0VDNzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowN0VERjA2NzFFMEVFNzExQTIxNDkwMEVENTY2QzU0RSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmEwMTE4OTVkLTA4OWYtMTFlNy05Y2JlLWRhZTQzOWQ0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"}
            }
        },
        methods: {
            goTo: function (path) {
                this.$router.push(path)
            }
        },
        created: function () {
            var self=this;
            this.$http.get("user/userinfo").then(response => {
                self.user=response.body.data;
            })
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .mine {
        background-color: #f4f4f4;
        .user-info {
            width: 100%;
            position: relative;
            background: url("../../../img/sky2.jpg") center top;
            background-size: cover;
            z-index: 100;
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
                margin: -30px; /*消除边缘透明*/
                background: url("../../../img/sky2.jpg") center top;
                background-size: cover;
                /*平铺*/
                background-attachment: fixed;
                /*位置固定*/
            }
            .user-head {
                img {
                    height: 80px;
                    width: 80px;
                    border-radius: 50px;
                }
            }
            .user-name {
                padding-top: 20px;
                .user-login-btn {
                    background-color: #cc3d4e;
                    color: white;
                    padding: 8px 30px;
                    border-radius: 4px;
                }
            }
        }

        .weui-cells {
            margin-top: 0px;
            background-color: #fff;
        }
        .iconfont {
            display: inline-block;
            vertical-align: middle;
            width: 26px;
            height: 26px;
            text-align: center;
            margin-right: 10px;
            line-height: 26px;
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