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

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')

