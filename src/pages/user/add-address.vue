<template>
<div class="add-address">
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">联系人</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="姓名">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd"><label class="weui-label">电话</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" pattern="^1[3|4|5|8][0-9]\d{4,8}$" placeholder="手机号码">
            </div>
        </div>
        <div class="weui-cell" >
            <div class="weui-cell__hd"><label class="weui-label">地址</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text"  placeholder="省 市 区/县">
            </div>
            <div class="weui-cell__ft">
                <i @click="selectMap" class="iconfont icon-dizhiguanli"></i>
            </div>
        </div>
        <div class="weui-cell" >
            <div class="weui-cell__hd"><label class="weui-label">详细地址</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text"  placeholder="街道 楼层">
            </div>
        </div>
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {

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
            selectMap:function () {
                //  this.$router.push("/selectMap")
            }
        },
        created: function () {
            //this.getLocation();
        }
        ,
        mounted: function () {

        }
    }
</script>

<style>

</style>