<template>
<div class="newOpen">
    <div class="weui-masonry" v-if="newList.length>0">
        <div class="weui-masonry-item" v-for="item in newList">
            <img :src="item.goodsLogo">
            <p>{{item.goodsName}}</p>
            <div class="describe" v-if="item.status!=1">
                <dl>
                    <dt>期号:</dt>
                    <dd>{{item.periodsCode}}</dd>

                    <dt>获得者:</dt>
                    <dd class="blue">{{item.userName}}</dd>

                    <dt>参与人次:</dt>
                    <dd>0</dd>

                    <dt>幸运号:</dt>
                    <dd class="yellow">{{item.luckyCode}}</dd>

                    <dt>开奖时间:</dt>
                    <dd>{{item.openTime}}</dd>

                </dl>
            </div>
            <div class="describe" v-else>
                <dl>
                    <dt>期号:</dt>
                    <dd>{{item.periodsCode}}</dd>

                    <dt>获得者:</dt>
                    <dd class="blue">等待开奖</dd>

                    <dt>开奖计时:</dt>
                    <dd class="yellow">{{item.waitOpenTime}}</dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="NoData"  v-else>
        <br>

        还没有哦，块去夺宝吧！
        <br>
        <br>
        <router-link :to="'/home'"  class="weui-btn weui-btn_mini weui-btn_primary">去夺宝</router-link>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                newList:[]
            }
        },
        methods: {
            getNewList:function () {
                var self=this;
                self.$http.get("DBPeriods/GetNewList").then(r=>{
                    self.newList=r.body.data;
                })
            }
        },
        created: function () {
            this.getNewList();
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .newOpen{
        min-height: 100%;
        background-color: #f5f5f5;

        .NoData{
            text-align: center;
            padding: 20px;
        }
        .yellow{
            color: rgb(245, 102, 0);
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
                padding: 10px;
                text-align: center;
                border-bottom: 5px solid #f5f5f5;;
                &:nth-child(odd){
                    margin-right: 2.5px;
                }
                &:nth-child(even){
                    margin-left: 2.5px;

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