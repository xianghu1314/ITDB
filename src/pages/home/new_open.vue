<template>
<div class="newOpen">
    <div class="weui-masonry">
        <div class="weui-masonry-item">
            <img src="../../assets/logo.png" alt="">
            <p>(第2期)iphone X 全面屏 256G 玫瑰金</p>
            <div class="describe">
                <dl>
                    <dt>期号:</dt>
                    <dd>4568774</dd>

                    <dt>获得者:</dt>
                    <dd class="blue">陌冰曦</dd>

                    <dt>参与人次:</dt>
                    <dd>10</dd>

                    <dt>幸运号:</dt>
                    <dd class="yellow">52013114</dd>

                    <dt>开奖时间:</dt>
                    <dd>2017-12-14 09:08:00</dd>

                </dl>
            </div>
        </div>

        <div class="weui-masonry-item">
            <img src="../../assets/logo.png" alt="">
            <p class="weui-grid__label">(第3期)iphone X 全面屏 256G 玫瑰金</p>
            <div class="describe">
                <dl>
                    <dt>期号:</dt>
                    <dd>4568774</dd>

                    <dt>获得者:</dt>
                    <dd class="blue">等待开奖</dd>

                    <dt>开奖计时:</dt>
                    <dd class="yellow">09:08:00</dd>
                </dl>
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
    .newOpen{
        .yellow{
            color: rgb(245, 102, 0);;
        }
        .blue{
            color:blue;
        }
        .weui-masonry{
            column-count: 2; column-gap: 0;

            .weui-masonry-item{
                break-inside: avoid;
                box-sizing: border-box;
                padding: 10px;
                box-sizing: border-box;
                border: 1px solid #D9D9D9;
                img{
                    width: 100%;
                }
                p{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .describe{
                    dl{
                        overflow: hidden;
                        width: 100%;
                        color: #686868;
                        font-size: 14px;
                        dt{
                            text-align: justify;
                            text-align-last: justify;
                            float: left;
                            width: 75px;
                        }
                        dd{
                            float: left;
                            width: calc(50vw - 75px - 22px);
                        }
                    }
                }
                .weui-grid__icon{
                    width: 100%;
                    height: auto;
                }
            }

        }

    }

</style>