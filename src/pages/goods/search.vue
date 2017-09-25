<template>
    <div>
        <div class="weui-search-bar" id="search_bar">
            <div class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" v-model="searchValue" @keyup.enter="getContent" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" id="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </div>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
        </div>
        <div class="search-preview" v-bind:class="{hidden:showIndex!=1}">
            <div class="weui-cells">
                <div class="weui-cell" v-for="item in previewList">
                    <div class="weui-cell__bd">
                        <p>{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-content" v-bind:class="{hidden:showIndex!=2}">
            <div class="weui-cells" >
                <div class="weui-cell" v-for="item in contentList">
                    <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                        <img src="../../assets/logo.png" style="width: 50px;display: block">
                    </div>
                    <div class="weui-cell__bd">
                        <p>{{item.title}}</p>
                        <p style="font-size: 13px;color: #888888;">{{item.subTitle}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-history" v-bind:class="{hidden:showIndex!=3}">
            <div class="weui-cells__title">搜索记录</div>
            <div class="weui-cells">
                <div class="weui-cell" v-for="item in historyList">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchValue:"Iphone 7 Plus",
                previewList:[],
                historyList:[],
                contentList:[],
                showIndex:3,//1 2 3
            }
        },
        methods: {
            getPreview:function(){
                for(var i=1;i<10;i++)
                    this.previewList.push("这里是搜索结果"+this.searchValue+i+"！")
            },
            getHistory:function(){
                for(var i=1;i<10;i++)
                    this.historyList.push("这里是历史"+i+"！")
            },
            getContent:function () {
                this.showIndex=2;
                for(var i=1;i<10;i++)
                    this.contentList.push({title:"这里搜索商品"+i+"！",subTitle:"这里是说明"})
            }
        },
        created: function () {
            this.getHistory();
        },
        watch: {
            "searchValue"(to, from) {
                this.getPreview();
            },
            "previewList"(to, from) {
                if(this.previewList.length!=0){
                    this.showIndex=1;
                }
            },
        },
        mounted: function () {
            weui.searchBar('#search_bar');
        }
    }
</script>

<style>
.hidden{
    display: none;
}
</style>