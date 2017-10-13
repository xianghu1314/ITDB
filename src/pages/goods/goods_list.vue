<template>
    <div class="goodslist">
        <div class="category">
            <div class="item" v-for="item in category" @click="setCurrent(item)" v-bind:class="{active:current==item}">
                {{item.name}}
            </div>
        </div>
        <div class="weui-cells" style="margin-top: 0px">
            <div class="weui-cell" v-for="(item ,index) in goodsList" @click="goToDetail(item)">
                <div class="weui-cell__hd">
                    <img v-bind:src="item.goodsLogo" style="width:60px;margin-right:5px;display:block"/></div>
                <div class="weui-cell__bd">
                    <p>{{'【第' + item.periodsCode + '期】' + item.goodsName}}</p>
                    <p style="font-size: 13px; color: rgb(136, 136, 136);">{{item.goodsDescribe}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                goodsList: [],
                category: [],
                current: []
            }
        },
        methods: {
            setCurrent: function (item) {
                this.current = item;
                this.getGoodsListByCID(item.id);
            },
            getCategoryByID: function (cid) {
                var self = this;
                self.$http.get("Category/" + cid).then(response => {
                    self.category = response.body.data;
                    var current = self.$Enumerable.From(self.category).First(s => s.id == cid);
                    self.setCurrent(current);
                })
            },
            getGoodsListByCID: function (cid) {
                var self = this;
                self.$http.get("DBPeriods/GetDBPeriodsByCID/", {params: {cid: cid}}).then(response => {
                    self.goodsList = response.body.data;
                })
            },
            goToDetail: function (item) {
                this.$router.push({path: "/goodsDetail", query: {id: item.id}});
            }
        },
        created: function () {
            var cid = this.$route.query.cid;
            this.getCategoryByID(cid);
            this.getGoodsListByCID(cid);
        },
        computed: {},
        mounted: function () {

        },
    }
</script>

<style lang="scss">
    .goodslist {
        .category {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #e5e5e5;
            .item {
                color: #8f8f8f;
                padding: 10px 15px 5px 15px;
                flex-direction: row;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            .active {
                color: #f9650b;
                background: linear-gradient(#f9650b, #f9650b) no-repeat !important;
                background-size: 50% 2px !important;
                background-position: bottom center !important;
            }

        }
        .weui-cells{
            .weui-cell__bd{
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
            }
        }
    }
</style>