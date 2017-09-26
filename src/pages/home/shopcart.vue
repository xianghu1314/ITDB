<template>
    <div class="shopcart-page">
        <div class="header">
            <div class="title">购物车</div>
            <i class="iconfont icon-changyonggoupiaorenbianji header-right" @click="edit">&nbsp;{{ifEdit==false?"编辑":"完成"}}</i>

        </div>
        <div class="content">
            <scroller class="content-scr">
                <div class="weui-cells weui-cells_checkbox">
                    <div @click="calcPrise()" class="weui-cell weui-check__label" v-for="(item ,index) in shopCarList" >
                        <label class="weui-cell__hd select-hd" v-bind:for="index" >
                            <input type="checkbox" class="weui-check" name="checkbox1" v-bind:id="index" >
                            <i  class="weui-icon-checked"></i><img src="../../assets/logo.png" />
                        </label>
                        <label class="weui-cell__bd" v-bind:for="index" style="padding-left: 5px">
                            <p>{{item.name}}</p>
                            <p style="font-size: 13px; color: rgb(136, 136, 136);">{{item.describe}}</p>
                        </label>
                        <div class="weui-cell__ft">
                            <div class="weui-flex">
                                <div class="weui-flex__item" v-on:click="sub(item,index)">-</div>
                                <div class="weui-flex__item">{{item.num}}</div>
                                <div class="weui-flex__item" v-on:click="add(item,index)">+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
        <div class="footer">
            <div class="weui-cells weui-cells_checkbox">
                <div class="weui-cell weui-check__label"  >
                    <label class="weui-cell__hd" for="all" >
                        <input  type="checkbox" id="all" class="weui-check" name="checkbox1"  @click="selectAll">
                        <i  class="weui-icon-checked"></i>
                        <span>全选</span>
                    </label>
                    <div class="weui-cell__bd">
                          合计<span style="color: #f9650b">￥<span style="font-weight: 700;font-size: 20px" >{{totalPrise}}</span></span>
                    </div>
                    <div class="weui-cell__ft" >
                        <transition name="fade">
                            <div class="delete" v-if="ifEdit">
                                移除
                            </div>
                            <div class="calc" v-else>
                                结算
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                shopCarList: [
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                    {name: "小米6", describe: "黑色 64G", num: 1, prise: 1999},
                ],
                ifEdit:true,
                totalPrise:0
            }
        },
        methods: {
            add: function (item, index) {
                item.num++;
            },
            sub: function (item, index) {
                if (item.num > 1)
                    item.num--;
            },
            edit:function () {
                this.ifEdit=!this.ifEdit;
                var checkbox=document.getElementsByTagName("input");
                for(var i=0;i<checkbox.length-1;i++) {
                    checkbox[i].checked = false;
                }
            },
            selectAll:function () {
                var checkbox=document.getElementsByTagName("input");
                var ifSelect=false;

                for(var i=0;i<checkbox.length-1;i++) {
                    if(checkbox[i].checked == false){
                        ifSelect=true;
                        break;
                    };
                }
                for(var i=0;i<checkbox.length-1;i++) {
                    checkbox[i].checked=ifSelect;
                }
                this.calcPrise();
            },
            calcPrise:function () {
                var self=this;
                var total=0;
                var checkbox=document.getElementsByTagName("input");
                for(var i=0;i<checkbox.length-1;i++) {
                    if(checkbox[i].checked == true){
                        total+=self.shopCarList[i].num*self.shopCarList[i].prise;
                    }
                }
                self.totalPrise= total;
            }

        },
        created: function () {

        },
        computed:{

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .shopcart-page {
        position: relative;
        line-height: 44px;
        box-sizing: border-box;
        padding: 44px 0px;
        height:100%;
        .hidden{
           display: none;
        }
        .weui-cells{
            margin-top: 0px;
        }
        .header {
            display: flex;
            height: 44px;
            position: absolute;
            top: 0px;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #e5e5e5;
            .title {
                width: 100%;
                line-height: 44px;
            }
            .header-right {
                padding: 0px 10px;
                position: absolute;
                right: 0px;
                top:0px;
            }
        }
        .content {
            height:100%;
            .select-hd{
                display:-webkit-box;
                display:-webkit-flex;
                display:flex;
                align-items: center;
                img{
                    width:60px; height: 60px
                }
            }
            .content-scr {
                position: inherit;
                .weui-flex__item {
                    border: 1px solid #e5e5e5;
                    padding: 5px;
                    text-align: center;
                    line-height: 15px;
                    width: 30px;
                    height: 25px;
                    box-sizing: border-box;
                    font-size: 12px;
                }
            }
        }
        .footer {
            display: flex;
            height: 44px;
            position: absolute;
            bottom: 0px;
            width: 100%;
            box-sizing: border-box;
            div{
                height: 100%;
            }
            .weui-cells {
                padding-left: 10px;
                line-height: 44px;
                width: 100%;
                .weui-cell {
                    padding: 0px;
                    height: 100%;
                    .weui-cell__hd{
                        display: flex;
                        align-items: center;
                    }
                    .weui-cell__bd{
                        text-align: right;
                        padding-right: 10px;
                    }
                    .weui-cell__ft {
                        .calc{
                            background-color: #f9650b;
                            padding: 0 45px;
                            color: #fff;
                        }
                        .delete{
                            background-color: #e53834;
                            padding: 0 45px;
                            color: #fff;
                        }

                    }
                }
            }
        }

    }
</style>