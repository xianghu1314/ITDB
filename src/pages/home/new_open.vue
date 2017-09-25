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
        min-height: 100%;
        background-color: #f5f5f5;

        .yellow{
            color: rgb(245, 102, 0);;
        }
        .blue{
            color:blue;
        }
        .weui-masonry{
            min-height: 100%;
            column-count: 2; column-gap: 0;
            .weui-masonry-item{
                background-color: white;
                break-inside: avoid;
                box-sizing: border-box;
                padding: 10px;
                box-sizing: border-box;
                text-align: center;
                &:nth-child(odd){
                    margin: 0px 2.5px 5px 0px;
                }
                &:nth-child(even){
                    margin: 0px 0px 5px 2.5px;
                }
                img{
                    width: 80%;
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
                            width: calc(50vw - 75px - 25px);
                            text-align: left;
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