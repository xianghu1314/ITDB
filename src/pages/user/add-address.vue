<template>
    <div class="add-address">
        <header-com :title="'添加/编辑地址'" ></header-com>
        <form id="form">
            <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系人</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address.userName" placeholder="姓名" required maxlength="10" tips="姓名 不能超过10个字符" emptyTips="请输入姓名">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">电话</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address.userPhone" pattern="REG_PHONE"  required placeholder="手机号码" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号" tips="手机号格式错误">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address.address" placeholder="省 市 区/县" required maxlength="30"  emptyTips="请输入省 市 区/县">
                </div>
                <div class="weui-cell__ft">
                    <i @click="selectMap" class="iconfont icon-dizhiguanli"></i>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">详细地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="address.detailAddress" type="text" required placeholder="街道 楼层" maxlength="50" emptyTips="请输入街道 楼层">
                </div>
            </div>
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">设为默认</div>
                <div class="weui-cell__ft">
                    <input class="weui-switch" type="checkbox" v-model="address.ifDefault">
                </div>
            </div>
            <div class="weui-btn-area">
                <a v-if="ifAdd" class="weui-btn weui-btn_primary" href="javascript:" @click="addAddress">确定</a>
                <a class="weui-btn weui-btn_primary" href="javascript:" @click="editAddress" v-else>提交</a>
            </div>
        </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                address: {
                    ifDefault: false,
                    userPhone: '',
                    userName: '',
                    address: '',
                    detailAddress: '',
                },
                ifAdd:true
            }
        },
        methods: {
            getLocation: function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            //alert("Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude)

                        },
                        function (error) {
                            switch (error.code) {
                                case error.PERMISSION_DENIED:
                                    alert("用户不允许地理定位.");
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    alert("无法获取当前位置.");
                                    break;
                                case error.TIMEOUT:
                                    alert("获取超时.");
                                    break;
                                case error.UNKNOWN_ERROR:
                                    alert("未知错误.");
                                    break;
                            }
                        }
                    );
                }
                else {
                    alert("当前设备不支持获取位置")
                }
            },
            selectMap: function () {
                //  this.$router.push("/selectMap")
            },
            addAddress:function () {
                var self=this;
                weui.form.validate('#form', function (error) {
                    if (!error) {
                        self.$http.post("Address",self.address).then(r=>{
                            if(r.body.status)
                                weui.toast(r.body.message)
                            else
                                weui.topTips(r.body.message)
                        })
                    }
                    // return true; // 当return true时，不会显示错误
                }, {
                    regexp: {
                        PHONE: /^1[3|4|5|8][0-9]\d{4,8}$/,
                        VCODE: /^.{4}$/
                    }
                });

            },
            editAddress:function () {
                var self=this;
                self.$http.put("Address",self.address).then(r=>{
                    if(r.body.status)
                        weui.toast(r.body.message)
                    else
                        weui.topTips(r.body.message)
                })
            },
        },
        created: function () {
            //this.getLocation();
            if (this.$route.params&&this.$route.params.userPhone) this.ifAdd=false;
            this.address=this.$route.params;

        }
        ,
        mounted: function () {
            weui.form.checkIfBlur('#form', {
                regexp: {
                    PHONE: /^1[3|4|5|8][0-9]\d{8}$/,
                    VCODE: /^.{4}$/
                }
            });
        }
    }
</script>

<style>

</style>