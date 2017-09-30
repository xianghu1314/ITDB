require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueScroller from 'vue-scroller'
import VueResource from 'vue-resource'
import router from './routes'

import App from './App.vue'

Vue.use(VueScroller);
Vue.use(VueResource);
Vue.use(VueAwesomeSwiper); //记得不要忘记这句

Vue.http.headers.common['Authorization'] = localStorage.getItem("token");
Vue.http.interceptors.push((request, next) => {
    // modify request
    request.url = "http://localhost:5000/api/" + request.url;
    // continue to next interceptor
    next((response) => {
        //在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
        return response;
    });
});
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')

