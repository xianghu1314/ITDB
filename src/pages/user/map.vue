<template>
<div class="map">
    <div id="container"></div>
    <div class="map-btn">
        <div class="weui-cells">
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">地址</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2">
                        <option value="1">中国</option>
                        <option value="2">美国</option>
                        <option value="3">英国</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell weui-cell_select weui-cell_select-after" style="line-height: 45px">
                <div class="weui-cell__hd">
                    <label for="" class="weui-label">详细地址</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="详细地址">
                </div>
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
            return {}
        },
        methods: {

        },
        created: function () {

        },
        mounted: function () {
            var map = new AMap.Map("container", {
                resizeEnable: true,
                center: [116.397428, 39.90923],
                zoom: 18
            });
            var marker = new AMap.Marker({
                position: map.getCenter(),
                draggable: true,
                cursor: 'move',
                raiseOnDrag: true
            });
            marker.setMap(map);
        }
    }
</script>

<style lang="scss">
.map{
    width: 100%;
    height: 100%;
    position: relative;
    #container{
        width: 100%;
        height: calc(100vh - 200px);
        box-sizing: border-box;
        padding-bottom: 160px;
    }
    .map-btn{

    }
}
</style>