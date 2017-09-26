<template>
    <div class="category">
        <search-com></search-com>
        <div class="weui-flex category-content">
            <div class="category-left">
                <scroller class="category-left-scr">
                    <div class="weui-cells" style="margin: 0">
                        <div class="weui-cell" v-for="item in category" v-bind:class="{active:current==item}" @click="setCurrent(item)">
                            <div class="weui-cell__bd">
                                <p>{{item.name}}</p>
                            </div>
                        </div>
                    </div>
                </scroller>
            </div>
            <div class="weui-flex__item category-right">
                <scroller class="category-right-scr">
                    <div class="banner">
                        <img src="../../../img/slider.jpg" height="360" width="720"/>
                    </div>
                    <div class="weui-loadmore weui-loadmore_line" style="margin-bottom: 0">
                        <span class="weui-loadmore__tips">{{current.name}}</span>
                    </div>
                    <div class="weui-grids" >
                        <a href="javascript:;" v-for="item in categoryChild" @click="gotogoodslist(item.id)" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img :src="item.logo" height="28"width="28"/>
                            </div>
                            <p class="weui-grid__label">
                                {{item.name}}
                            </p>
                        </a>
                    </div>
                </scroller>
            </div>
        </div>
    </div>
</template>

<script>
    const  searchCom=require('../../components/search-com.vue');
    export default {
        data() {
            return {
                current:'手机',
                category:[
                    {id:1,name:"手机"},
                    {id:2,name:"平板"},
                    {id:3,name:"电脑"},
                    {id:4,name:"电视"},
                    {id:5,name:"家用电器"},
                    {id:6,name:"智能"},
                    {id:7,name:"游戏"},
                    {id:8,name:"零食"}
                ],
                categoryChild:[{logo:"../img/logo.png",name:"测试",id:1}]
            }
        },
        methods: {
            setCurrent:function (item) {
               this. current=item;
            },
            gotogoodslist:function (id) {
                this.$router.push({path:"/goodsList",query: { cid: id }});
            }
        },
        created: function () {

        },
        mounted: function () {

        },
        components:{
            searchCom
        },
        watch:{
            "current" (to,from){
                this.categoryChild.push({logo:"../img/logo.png",name:"测试",id:1});

            }
        }
    }
</script>

<style lang="scss">
.category{
    height:100%;
    div:{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .category-content{
        height:100%;
        .category-left{
            min-width: 100px;
            height: 100%;
            border-right:1px solid rgb(229, 229, 229);
            .category-left-scr{
                position: inherit;
                text-align: center;
            }
            .active{
                color: #f9650b;
                font-size: 18px;
            }
        }
        .category-right{
            padding: 10px;
            width: calc(100vw - 100px);
            box-sizing: border-box;
            .category-right-scr{
                position: inherit;
                text-align: center;
            }
            .banner{
                position: relative;
                width: 100%;
                height: calc((100vw - 100px) * 0.382);
                overflow: hidden;
                border-radius: 5px;
                z-index: 100;
                img{
                    transform:translate(-50%,-50%);
                    position: absolute;
                    top:50%;
                    left:50%;
                    position: absolute;

                }
            }
            .weui-grids{
                &:before{
                    display: none;
                }
                &:after{
                    display: none;
                }
                .weui-grid{
                    border: none;
                    &:before{
                        display: none;
                    }
                    &:after{
                        display: none;
                    }
                }
            }
        }
    }
}
</style>