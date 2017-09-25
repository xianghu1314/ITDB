<template>
    <div class="helpInfo">
        <div class="page article js_show">
            <div class="page__hd">
                <h1 class="page__title">Article{{$route.params.id}}</h1>
                <p class="page__desc">文章{{$route.params.id}}</p>
            </div>
            <div class="page__bd">
                <article class="weui-article">
                    <h1>大标题</h1>
                    <section>
                        <h2 class="title">章标题</h2>
                        <section>
                            <h3>1.1 节标题</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </section>
                        <section>
                            <h3>1.2 节标题</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>
                    </section>
                </article>
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

<style>
    .helpInfo {
        position: fixed;
        top: 0;
        width: 100%;
        bottom: 0;
        background-color: white;
        overflow: auto;
    }
</style>