<template>
    <div id="multi-list-com">
        <div v-for="item in formatList">
            <div v-if="item.type==1" class="weui-flex list-type1">
                <div class="weui-flex__item" v-for="it in item.data" @click="gotoDetail(it)">
                    <img :src="it.goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                </div>
            </div>
            <div v-else-if="item.type==2" class="weui-flex list-type2">
                <div class="weui-flex__item" v-for="it in item.data" @click="gotoDetail(it)">
                    <img :src="it.goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <div class="weui-flex__item_footer">
                        <h5>{{it.title}}</h5>
                        <p>{{it.goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{it.goodsPrice}}</span>
                            <span>夺宝{{it.perPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="item.type==3" class="weui-flex list-type3">
                <div class="weui-flex__item" v-for="it in item.data" @click="gotoDetail(it)">
                    <img :src="it.goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <div class="weui-flex__item_footer">
                        <h5>{{it.title}}</h5>
                        <p>{{it.goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{it.goodsPrice}}</span>
                            <span>夺宝{{it.perPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="item.type==4" class="weui-flex list-type4">
                <div class="weui-flex__item" @click="gotoDetail(item.data[0])">
                    <img :src="getArray(item.data,0).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                </div>
                <div class="weui-flex__item" @click="gotoDetail(item.data[0])">
                    <div class="weui-flex__item_footer">
                        <h5>{{getArray(item.data,0).title}}</h5>
                        <p>{{getArray(item.data,0).goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{getArray(item.data,0).goodsPrice}}</span>
                            <span>夺宝{{getArray(item.data,0).perPrice}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="item.type==5" class="weui-flex list-type5">
                <div class="weui-flex__item" @click="gotoDetail(item.data[0])">
                    <div class="weui-flex__item_footer">
                        <h5>{{getArray(item.data,0).title}}</h5>
                        <p>{{getArray(item.data,0).goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{getArray(item.data,0).goodsPrice}}</span>
                            <span>夺宝{{getArray(item.data,0).perPrice}}</span>
                        </div>
                    </div>
                </div>
                <div class="weui-flex__item" @click="gotoDetail(item.data[0])">
                    <img :src="getArray(item.data,0).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                </div>
            </div>
            <div v-else-if="item.type==6" class="weui-flex list-type7">
                <div class="weui-flex__item" @click="gotoDetail(getArray(item.data,0))">
                    <img :src="getArray(item.data,0).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <div class="weui-flex__item_footer">
                        <h5>{{getArray(item.data,0).title}}</h5>
                        <p>{{getArray(item.data,0).goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{getArray(item.data,0).goodsPrice}}</span>
                            <span>夺宝{{getArray(item.data,0).perPrice}}</span>
                        </div>
                    </div>
                </div>
                <div class="weui-flex__item list-two">
                    <img :src="getArray(item.data,1).goodsLogo" @click="gotoDetail(getArray(item.data,1))" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <img :src="getArray(item.data,2).goodsLogo" @click="gotoDetail(getArray(item.data,2))" onerror="javascript:this.src='../../img/pandadb.jpg'">
                </div>
            </div>
            <div v-else-if="item.type==7" class="weui-flex list-type8">
                <div class="weui-flex__item list-two">
                    <img @click="gotoDetail(getArray(item.data,1))" :src="getArray(item.data,1).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <img @click="gotoDetail(getArray(item.data,2))" :src="getArray(item.data,2).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                </div>
                <div class="weui-flex__item" @click="gotoDetail(getArray(item.data,0))">
                    <img :src="getArray(item.data,0).goodsLogo" onerror="javascript:this.src='../../img/pandadb.jpg'">
                    <div class="weui-flex__item_footer">
                        <h5>{{getArray(item.data,0).title}}</h5>
                        <p>{{getArray(item.data,0).goodsDescribe}}</p>
                        <div class="item_footer_bottom">
                            <span>¥{{getArray(item.data,0).goodsPrice}}</span>
                            <span>夺宝{{getArray(item.data,0).perPrice}}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            // 必传且是字符串
            ArrayData: {
                type: Array,
                required: true,
                default: []
            },
        },
        data() {
            return {
                ClassType: [
                    {type: 1, num: 1},//平均
                    {type: 2, num: 2},//平均
                    {type: 3, num: 3},//平均
                    {type: 4, num: 1},//左边图片右边说明
                    {type: 5, num: 1},//右边图片左边说明
                    {type: 6, num: 3},//左边一个，右边两个
                    {type: 7, num: 3},//左边两个，右边一个
                ],
                FormatList: []
            }
        },
        methods: {
            getRandom: function () {
                var max = this.ClassType.length - 1;
                var i = Math.round(Math.random() * max);//0-1   不包括1
                return i;
            },
            getArray: function (data, index) {
                return data[index];
            },
            gotoDetail: function (item) {
                this.$router.push({path: '/goodsDetail', query: {id: item.id}});
            },
            clean: function () {
                this.FormatList = [];
            },
            // nofind: function () {
            //     var img = event.srcElement;
            //     img.src = "http://mat1.gtimg.com/cd/2017/home/nlogo0518.png"; //替换的图片
            //     img.οnerrοr = null; //控制不要一直触发错误
            // },

        },
        created: function () {

        },
        computed: {
            formatList: function () {
                var self = this;
                if (self.ArrayData.length === 0) {
                    self.FormatList = [];
                    return;
                }
                //生成FormatList的数量
                var oldNum = self.FormatList.map(item => item.data.length)
                oldNum = oldNum.length === 0 ? 0 : oldNum.reduce(function (a, b) {
                    return a + b;
                });
                //新增的数量
                var arr = [].concat(self.ArrayData);
                arr.slice(0, oldNum);

                while (arr.length > 0) {
                    var CurrentClassType = self.ClassType[self.getRandom()];
                    while (CurrentClassType.num > arr.length) CurrentClassType = self.ClassType[self.getRandom()];

                    var arr2 = arr.splice(0, CurrentClassType.num);
                    var it = {data: arr2, type: CurrentClassType.type}
                    self.FormatList.push(it);
                }
                return self.FormatList;

            },
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal',
                }
            }

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    $highlight: #f9650b;
    $mygay: #949494;
    #multi-list-com {
        background-color: rgb(230, 230, 250);
        .weui-flex {
            margin-top: 5px;
        }
        .list-two {
            display: flex;
            flex-direction: column;
        }
        .weui-flex__item {
            overflow: hidden;
            margin-right: 5px;
            background-color: white;
            &:last-child {
                margin-right: 0px;
            }
            img {
                width: 100% !important;
                margin: 0;
            }
        }
        .list-type1 {
            .weui-flex__item {
                display: flex;
            }
        }
        .list-type2 {

            .weui-flex__item_footer {
                padding: 5px 10px;
                h5 {
                    font-weight: 400;
                    color: black;
                    font-size: 1em;
                }
                p {
                    color: $mygay;
                    font-size: .8em;
                }

                .item_footer_bottom {
                    color: $highlight;
                    font-size: .8em;
                }
            }
            img {
                width: calc(100vw / 2 - 2.5px);
            }
        }
        .list-type3 {
            img {
                width: 100%;
            }
            .weui-flex__item_footer {
                padding: 5px 10px;
                h5 {
                    font-weight: 400;
                    color: black;
                    font-size: .9em;
                }
                p {
                    color: $mygay;
                    font-size: .8em;
                }

                .item_footer_bottom {
                    color: $highlight;
                    font-size: .8em;
                }
            }
        }
        .list-type4 {
            img {
                width: 100%;
            }
            .weui-flex__item {
                display: flex;
                align-items: center;
                .weui-flex__item_footer {
                    padding: 5px 10px;
                    h5 {
                        font-weight: 400;
                        color: black;
                        font-size: 1em;
                    }
                    p {
                        color: $mygay;
                        font-size: .8em;
                    }

                    .item_footer_bottom {
                        color: $highlight;
                        font-size: .8em;
                    }
                }
            }
        }
        .list-type5 {
            @extend .list-type4
        }
        .list-type7 {
            img {
                width: 100%;
            }
            text-align: center;
            .weui-flex__item.list-two {
                img {
                    width: auto;
                    height: calc(100vw / 3);
                }
            }
            .weui-flex__item_footer {
                padding: 5px 10px;
                h5 {
                    font-weight: 400;
                    color: black;
                    font-size: .9em;
                }
                p {
                    color: $mygay;
                    font-size: .8em;
                }

                .item_footer_bottom {
                    color: $highlight;
                    font-size: .8em;
                }
            }
        }
        .list-type8 {
            @extend .list-type7
        }
    }
</style>