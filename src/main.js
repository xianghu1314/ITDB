import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import Swiper from 'swiper';
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource'
import router from './routes'

import VueLinq from './Plugin/VueLinq.js'

import App from './App.vue'

const headerCom = require("./components/header-com.vue");
Vue.component('header-com', headerCom)


Vue.use(VueScroller);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLinq);


Vue.http.headers.common['Authorization'] = localStorage.getItem("token");
Vue.http.interceptors.push((request, next) => {
    // modify request
    request.url = "http://192.168.1.120:5000/api/" + request.url;
    // continue to next interceptor
    next((response) => {
        //在响应之后传给then之前对response进行修改和逻辑判断。
        // 对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
        if (response.status == 401)
            alert("登录过期")
        else if (response.status == 0)
            weui.topTips("网络链接失败")
        else
            return response;
    });
});
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')

