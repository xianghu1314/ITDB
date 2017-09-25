<template>
    <div>
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">夺宝须知</div>
            <div class="weui-panel__bd">
                <div @click="toInfo(1)" class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
                <div  @click="toInfo(1)"  class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题二</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>
            </div>
        </div>
        <router-view>

        </router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            toInfo:function (id) {
                this.$router.push({path:"/help/info/"+id})
            }
        },
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style>

</style>