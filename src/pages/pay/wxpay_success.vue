<template>
    <div class="payResult">
        <div class="icon-box">
            <i class="weui-icon-success weui-icon_msg"></i>
            <div class="icon-box__ctn">
                <h3 class="icon-box__title">支付成功</h3>
                <div class="goBtn">
                    <span>继续购买</span>
                    <span>返回首页</span>
                </div>
            </div>
        </div>
        <div class="weui-panel">
            <div class="weui-panel__hd">成功参与10人次</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">phone X 256G 土豪金</h4>
                    <div class="weui-media-box__desc">
                        <p>商品期号：14251</p>
                        <br>
                        <p>
                            <span>参与号码：</span><span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                            <span>12688</span>
                        </p>
                    </div>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">2017-09-10 12:13:24</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">四川成都</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
.payResult{
    .icon-box{
        text-align: center;
        padding: 20px;
        .weui-icon_msg{
           font-size: 60px;
        }
        .goBtn{
            padding: 20px 0;
            span{
                padding: 5px 20px;
                border-radius: 3px;

                &:first-child{
                    border: 1px solid #179B16;
                    background-color: white;
                    color: #179B16;
                }
                &:last-child{
                    border: 1px solid #179B16;
                    background-color: #179B16;
                    color: white;
                }
            }
        }
    }

}
</style>