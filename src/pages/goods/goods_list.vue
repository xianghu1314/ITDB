<template>
    <div class="goodslist">
        <div class="category">
            <div class="item" v-for="item in category" @click="setCurrent(item)" v-bind:class="{active:currentID==item.id}">{{item.name}}</div>
        </div>
        <div class="weui-cells" style="margin-top: 0px">
            <div @click="calcPrise()" class="weui-cell" v-for="(item ,index) in goodsList" v-bind:for="index">
                <div class="weui-cell__hd" >
                    <img src="../../assets/logo.png" style="width:60px;margin-right:5px;display:block"/></div>
                <div class="weui-cell__bd">
                    <p>{{item.name}}</p>
                    <p style="font-size: 13px; color: rgb(136, 136, 136);">{{item.describe}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                goodsList: [
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                ],
                category:[
                    {id:1,name:"苹果"},
                    {id:2,name:"华为"},
                    {id:3,name:"三星"},
                    {id:4,name:"小米"},
                    {id:5,name:"HTC"},
                    {id:6,name:"VIVO"},
                ],
                currentID:1
            }
        },
        methods: {
            setCurrent:function (item) {
                this.currentID=item.id;
            }
        },
        created: function () {
            console.log("参数"+this.$route.query.cid)
        },
        computed:{

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .goodslist{
        .category{
            width: 100%;
            display: flex;
            .item{
                color: #8f8f8f;
                padding:10px 15px 5px 15px;
                flex-direction: row;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
            }
            .active{
                color: #f9650b;
                background: linear-gradient(#f9650b , #f9650b) no-repeat !important;
                background-size:50% 2px!important;
                background-position: bottom center!important;
            }

        }
    }
</style>