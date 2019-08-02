<template>
    <div class="newOpen">
        <div class="weui-masonry" v-if="newList.length>0">
            <div class="weui-masonry-item" v-for="item in newList">
                <img :src="item.goodsLogo">
                <p>{{item.goodsName}}</p>
                <div class="describe" v-if="item.status!=1">
                    <p><span>期号:</span><span class="blue">{{item.periodsCode}}</span></p>
                    <p><span>获得者:</span><span>{{item.userName}}</span><span class="yellow">（{{item.luckyCode}}）</span>
                    </p>
                    <!--<p><span>参与人次:</span><span>{{item.userName}}</span></p>-->
                    <p><span>开奖时间:</span><span style="font-size: 14px;">{{item.openTime2}}</span></p>
                </div>
                <div class="describe" v-else>
                    <p><span>期号:</span><span class="blue">{{item.periodsCode}}</span></p>
                    <p><span>获得者:</span><span>等待开奖</span></p>
                    <p><span>开奖计时:</span><span style="font-size: 14px;">{{item.waitOpenTime2}}</span></p>
                </div>
            </div>
        </div>
        <div class="NoData" v-else>
            <br>

            还没有哦，块去夺宝吧！
            <br>
            <br>
            <router-link :to="'/home'" class="weui-btn weui-btn_mini weui-btn_primary">去夺宝</router-link>
        </div>
    </div>
</template>

<script>
    import time from "../../../tools/time.js"

    export default {
        data() {
            return {
                newList: [],
                timer: null
            }
        },
        methods: {
            getNewList: function () {
                var self = this;
                self.$http.get("DBPeriods/GetNewList").then(r => {
                    r.body.data.forEach(item => {
                        item.openTime2 = time.TimeUp(item.openTime);
                        item.waitOpenTime2 = time.TimeDown(item.waitOpenTime);
                    });
                    self.newList = r.body.data;
                    self.timer = setInterval(function () {
                        self.newList.forEach(item => {
                            item.openTime2 = time.TimeUp(item.openTime);
                            item.waitOpenTime2 = time.TimeDown(item.waitOpenTime);
                        });
                    }, 1000)
                })

            }
        },
        created: function () {
            this.getNewList();
        },
        mounted: function () {

        },
        destroyed: function () {
            clearInterval(this.timer);
        }
    }
</script>

<style lang="scss">
    .newOpen {
        min-height: 100%;
        background-color: #f5f5f5;

        .NoData {
            text-align: center;
            padding: 20px;
        }
        .yellow {
            color: rgb(245, 102, 0);
        }
        .blue {
            color: blue;
        }
        .weui-masonry {

            min-height: 100%;
            column-count: 2;
            column-gap: 0;
            .weui-masonry-item {
                background-color: white;
                break-inside: avoid;
                padding: 10px;
                text-align: left;
                border-bottom: 5px solid #f5f5f5;;
                &:nth-child(odd) {
                    margin-right: 2.5px;
                }
                &:nth-child(even) {
                    margin-left: 2.5px;

                }
                img {
                    width: 100%;
                }
                p {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .describe {
                    p {
                        text-align: left;
                    }
                }
                .weui-grid__icon {
                    width: 100%;
                    height: auto;
                }
            }

        }

    }

</style>