<template>
    <div  class="weui-flex scroll_caption">
        <div class="scroll_title"><router-link to="category">幸运之星</router-link></div>
        <div class="weui-flex__item" >
            <ul class="scroll-ul" v-bind:style="{top:top}">
                <li class="scroll-li" v-for="item in ItemList">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ItemList:[
                {src:'../img/logo.png',title:'中奖信息1'},
                {src:'../img/logo.png',title:'中奖信息2'},
                {src:'../img/logo.png',title:'中奖信息3'},
                {src:'../img/logo.png',title:'中奖信息4'},
                {src:'../img/logo.png',title:'中奖信息5'},
            ],
            index:0,
            direction:'down',//down or up
            }
        },
        methods: {},
        computed: {
            top() {
                return - this.index * 44 + 'px';
            }
        },
        created: function () {

        },
        mounted: function () {
            setInterval(_=>{
                if(this.direction=='down'){
                    if (this.index < this.ItemList.length-1) {
                        this.index ++;
                    }else{
                        this.direction='up';
                    }
                }else{
                    if(this.index>0) {
                        this.index --;
                    }else{
                        this.direction='down';
                    }
                }
            },3000);
        }
    }
</script>

<style>
 .scroll_caption{
     height: 44px;
     line-height: 44px;
 }
 .scroll_caption .scroll_title{
     padding: 0 10px;
 }
 .scroll_caption .weui-flex__item{
     overflow: hidden;
 }
.scroll-ul{
    padding: 0 10px 0 10px;
    margin: 0;
    list-style: none;
    position: relative;

    transition: top 2s;
    -moz-transition: top 2s; /* Firefox 4 */
    -webkit-transition: top 2s; /* Safari 和 Chrome */
    -o-transition: top 2s; /* Opera */
}
.scroll-ul > .scroll-li{
    height: 44px;
}
</style>