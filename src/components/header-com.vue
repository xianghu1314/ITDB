<template>
    <div class="header">
        <i class="iconfont icon-fanhui header-left" @click="back"></i>
        <div class="title">{{title}}</div>
        <i v-if="btn" :class="['iconfont icon-changyonggoupiaorenbianji header-right',btnClass]" @click="btn">&nbsp;{{btnText}}</i>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "",
                required: true
            },
            btn: {
                type: Function,
                required: false,
                default: undefined,
            },
            btnText: {
                type: String,
                required: false,
                default: "",

            },
            btnClass: {
                type: String,
                required: false,
                default: "",

            },
        }
        ,
        data() {
            return {}
        },
        methods: {
            back: function () {
                this.$router.go(-1);
            }
        },
        mounted: function () {

        }
    }
</script>
<style lang="scss">
    .header {
        display: flex;
        height: 44px;
        /*position: relative;*/
        top: 0px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
        line-height: 44px;
        background-color:#fff;
        .title {
            width: 100%;
            line-height: 44px;
        }
        .header-right {
            padding: 0px 10px;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        .header-left{
            padding: 0px 10px;
            position: absolute;
            left: 0px;
            top: 0px;
        }
    }
</style>