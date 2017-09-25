<template>
    <div class="address">
        <div class="addAddress" @click="addAddress">
            <i class="iconfont icon-dizhiguanli"></i>
            <p>添加地址</p>
        </div>
        <div class="addAddressList">

            <div class="weui-flex addressItem">
                <p class="weui-flex__item">四川省 成都市 金牛区 万达广场 甲级写字楼 A座 908室</p>
                <i class="iconfont icon-changyonggoupiaorenshanchu"></i>
                <i class="iconfont icon-changyonggoupiaorenbianji"></i>
            </div>
            <div class="weui-flex addressItem">
                <p class="weui-flex__item">四川省 成都市 金牛区 万达广场 甲级写字楼 A座 908室</p>
                <i class="iconfont icon-changyonggoupiaorenshanchu"></i>
                <i class="iconfont icon-changyonggoupiaorenbianji"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            addAddress:function () {
                this.$router.push('/addAddress')
            }
        },
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">

.address{
    background-color: #f8f8f8;
    .addAddress{
        text-align: center;
        background-color: white;
        padding:20px;
        i{
            color: #cc3d4e;
            font-size: 40px;
        }
    }
    .addressItem{
        padding: 20px;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        background-color: white;
        margin-top: 10px;
        i{
            font-size: 25px;
            padding: 0px 5px;
            &:last-child{
                border-left: 1px solid #CECECE;
            }
        }

    }
}
</style>