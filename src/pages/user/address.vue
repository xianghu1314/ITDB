<template>
    <div class="address">
        <header-com :title="'收货地址'"></header-com>
        <div class="addAddress" @click="addAddress">
            <i class="iconfont icon-dizhiguanli"></i>
            <p>添加地址</p>
        </div>
        <div class="weui-cells weui-cells_radio">
            <div class="weui-cell weui-check__label" v-for="(item,index) in address" @click="select(item)">
                <div class="weui-cell__hd">
                    <input type="radio" class="weui-check" name="radio1" :id="'x'+index" :checked="item.ifDefault">
                    <span class="weui-icon-checked"></span>
                </div>
                <label class="weui-cell__bd" :for="'x'+index">
                    <h5><span>{{item.userName}}</span>{{' '+item.userPhone}}</h5>
                    <p>{{item.address + ' ' + item.detailAddress}}</p>
                </label>
                <div class="weui-cell__ft">
                    <i class="iconfont icon-changyonggoupiaorenshanchu" @click="del(item)"></i>
                    <i class="iconfont icon-changyonggoupiaorenbianji" @click="edit(item)"></i>
                </div>
            </div>
            <!--<a href="javascript:void(0);" class="weui-cell weui-cell_link">-->
            <!--<div class="weui-cell__bd">添加更多</div>-->
            <!--</a>-->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                address: [],
                ifSelect:0
            }
        },
        methods: {
            addAddress: function () {
                this.$router.push('/addAddress')
            },
            select:function (item) {
                if(this.ifSelect){
                    var json=JSON.stringify(item);
                    sessionStorage.setItem("address",json);
                    this.$router.push({path:"/paymentMode"});
                }
                else
                    return;
            },
            getAddress: function () {
                var self = this;
                self.$http.get("Address/GetAll").then(r => {
                    self.address = r.body.data;
                })
            },
            del: function (item) {
                var self = this;
                weui.confirm('您确定要删除吗？',
                    function () {
                        self.$http.delete("Address/" + item.id).then(r => {
                            if (r.body.status) {
                                weui.toast(r.body.message)
                                self.getAddress();
                            }
                        })
                    },
                    function () {
                        console.log('no')
                    },
                    {
                        title: '删除地址'
                    });
            },
            edit: function (item) {
                var self = this;
                self.$router.push({name: "addAddress", params: item})
            }
        },
        created: function () {
            this.getAddress();
            var se= this.$route.query.select;
            if(se)
                this.ifSelect=se;
        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">

    .address {
        background-color: #f8f8f8;
        .addAddress {
            text-align: center;
            background-color: white;
            padding: 10px 20px;
            i {
                color: #f60;
                font-size: 30px;
            }
            p {
                font-size: 18px;
            }
        }
        .weui-cell__hd {
            width: 22.38px;
        }
        .weui-cell__bd {
            h5{
                font-size: 18px;
                font-weight: normal;
                span{
                    color: #f60;
                }
            }
            p {
                font-size: 14px;
            }
        }
        .weui-cell__ft {
            i {
                font-size: 20px;
                &:last-child {
                    border-left: 1px solid #CECECE;
                    padding-left: 5px;
                }
            }

        }
    }
</style>