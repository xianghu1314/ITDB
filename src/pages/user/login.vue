<template>
    <div class="login">
        <div class="login-header">
            <i class="iconfont icon-fanhui"></i>
            <div>登陆</div>
        </div>
        <div class="login-content">

            <div class="login-form">
                <transition name="slide-fade" mode="out-in">
                    <!--登陆-->
                    <div v-if="loginType==1" class="weui-cells weui-cells_form" key="login">
                        <div class="weui-cell weui-cell_vcode" style="line-height: 45px;">
                            <div class="weui-cell__hd">
                                <label class="weui-label">手机号</label>
                            </div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" v-model="phone" type="tel" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_vcode">
                            <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" v-model="pwd" type="password" placeholder="请输入密码">
                            </div>
                            <div class="weui-cell__ft">
                                <button class="weui-vcode-btn" @click="switchPWD">忘记密码</button>
                            </div>
                        </div>
                        <div class="weui-cell weui_btn_area" style="text-align: center;display: block">
                            <a href="javascript:;" @click="Login" class="weui-btn weui-btn_mini weui-btn_primary">登陆</a>
                            <a href="javascript:;" @click="switchZhuCe()" class="weui-btn weui-btn_mini weui-btn_warn">注册</a>
                        </div>
                    </div>
                    <!--注册-->
                    <div v-else-if="loginType==2" class="weui-cells weui-cells_form" key="zhuce">
                        <div class="weui-cell weui-cell_vcode" style="line-height: 45px;">
                            <div class="weui-cell__hd">
                                <label class="weui-label">手机号</label>
                            </div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="tel" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_vcode">
                            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="number" placeholder="请输入验证码">
                            </div>
                            <div class="weui-cell__ft">
                                <button class="weui-vcode-btn">刷新验证码</button>
                            </div>
                        </div>
                        <div class="weui-cell weui_btn_area" style="text-align: center;display: block">
                            <a href="javascript:;" @click="switchLogin" class="weui-btn weui-btn_mini weui-btn_primary">返回登陆</a>
                            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">注册</a>
                        </div>
                    </div>
                    <!--找回-->
                    <div class="weui-cells weui-cells_form" key="password" v-else>
                        <div class="weui-cell weui-cell_vcode" style="line-height: 45px;">
                            <div class="weui-cell__hd">
                                <label class="weui-label">手机号</label>
                            </div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="tel" placeholder="请输入手机号">
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_vcode">
                            <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="number" placeholder="请输入验证码">
                            </div>
                            <div class="weui-cell__ft">
                                <button class="weui-vcode-btn">刷新验证码</button>
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_vcode" style="line-height: 45px;">
                            <div class="weui-cell__hd">
                                <label class="weui-label">新密码</label>
                            </div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="password" placeholder="请输入新密码">
                            </div>
                        </div>
                        <div class="weui-cell weui-cell_vcode" style="line-height: 45px;">
                            <div class="weui-cell__hd">
                                <label class="weui-label">验证密码</label>
                            </div>
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="password" placeholder="再次输入密码">
                            </div>
                        </div>
                        <div class="weui-cell weui_btn_area" style="text-align: center;display: block">
                            <a href="javascript:;" @click="switchLogin" class="weui-btn weui-btn_mini weui-btn_primary">返回登陆</a>
                            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">修改密码</a>
                        </div>
                    </div>
                </transition>
            </div>


        </div>
        <div class="login-bottom">
            <div class="weui-loadmore weui-loadmore_line">
                <span class="weui-loadmore__tips">其他方式登陆</span>
            </div>
            <div class="pay-icon">
                <div class="pay-wx"><img src="img/wechat.png" alt=""></div>
                <div class="pay-qq"><img src="img/qq.png" alt=""></div>
                <div class="pay-ali"><img src="img/zhi.png" alt=""></div>
                <div class="pay-weibo"><img src="img/weibo.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                loginType: 1,//1登陆，2注册，3找回密码
                phone: '',
                pwd: ''
            }
        },
        methods: {
            switchZhuCe: function () {
                this.loginType = 2;
            },
            switchLogin: function () {
                this.loginType = 1;
            },
            switchPWD: function () {
                this.loginType = 3;
            },
            Login: function () {
                if (this.phone == '') {
                    weui.topTips('手机号不能为空', 2000);
                    return;
                }
                if (this.pwd == '') {
                    weui.topTips('密码不能为空', 2000);
                    return;
                }
                this.$http.get('user/token', {
                    params: {
                        UserPhone: this.phone,
                        UserPwd: this.pwd
                    },
                }).then(response => {
                    // get body data
                    debugger
                    var data = response.body;
                    if (data.status) {
                        var token = 'bearer ' + data.data.token;
                        Vue.http.headers.common['Authorization'] = token;
                        localStorage.setItem("token", token)
                        weui.toast(data.message, 3000);
                        this.$router.push("/home/mine")

                    } else {
                        weui.topTips(data.message, 3000);
                    }
                }, response => {
                    // error callback
                    debugger

                    weui.topTips("未知错误", 3000);
                });
            }
        },
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .login {
        width: 100%;
        height: 100%;
        position: relative;
        .login-header {
            height: 44px;
            width: 100%;
            position: absolute;
            top: 0;
            line-height: 44px;
            border-bottom: 1px solid #e5e5e5;
            i {
                position: absolute;
                left: 0px;
                margin: 0 10px;
            }
            div {
                text-align: center;
                width: 100%;
                font-weight: bold;
            }
        }
        .login-content {
            width: 100%;
            height: 100%;
            padding-top: 44px;
            padding-bottom: 100px;
            box-sizing: border-box;
            .login-form {
                .weui-cells {
                    line-height: 50px;
                    .weui-label {
                        width: 75px;
                    }
                }
            }
        }
        .login-bottom {
            width: 100%;
            bottom: 0px;
            position: absolute;

        }
    }

    .pay-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        div {
            width: 40px;
            height: 40px;
            margin: 0 5px;
            img {
                width: 100%;
            }
        }
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>