<template>
    <div class="share">
        <div class="share-content">
            <div class="user-info"><img src="img/logo.png"> <span>皮皮虾</span></div>
            <div class="share-item"><p class="describe">等待呢三生三世，穿越了十里八方，只为与你有一场美丽的邂逅。</p>
                <div class="picture">
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                </div>
            </div>
        </div>
        <div class="share-content">
            <div class="user-info"><img src="img/logo.png"> <span>皮皮虾</span></div>
            <div class="share-item"><p class="describe">等待呢三生三世，穿越了十里八方，只为与你有一场美丽的邂逅。</p>
                <div class="picture">
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                    <div class="img"><img src="img/logo.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style lang="scss">
    .share {
        background-color: #f4f4f4;
        .share-content {
            margin-bottom:10px;
            background-color: #fff;
            .user-info {
                padding: 10px;
                display: flex;

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                }
                span {
                    align-content: center;
                    line-height: 50px;
                }
                .share-ip {
                    p {
                        line-height: 25px;
                        margin: 0;
                        padding: 0;
                        height: 25px;
                        display: inline-block;
                    }
                }
            }
            .share-item {
                padding: 10px;
                .describe {
                    padding: 0px;
                }
                .picture {
                    overflow: hidden;
                    .img {
                        width: 100px;
                        height: 100px;
                        position: relative;
                        overflow: hidden;
                        float: left;
                        margin: 5px;
                        img {
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            -webkit-transform: translate(-50%, -50%);;
                            -moz-transform: translate(-50%, -50%);;
                            -ms-transform: translate(-50%, -50%);;
                            -o-transform: translate(-50%, -50%);;
                            transform: translate(-50%, -50%);;

                        }
                    }
                }
            }
        }
    }
</style>