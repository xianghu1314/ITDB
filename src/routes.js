import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const index = require('./pages/home/index.vue');
const home = require('./pages/home.vue');

const NotFond = require('./pages/404.vue');
const Category = require('./pages/goods/category.vue');
const Mine = require('./pages/home/mine.vue');
const ShopCart = require('./pages/home/shopcart.vue');
const Search = require('./pages/goods/search.vue');
const GoodsList = require('./pages/goods/goods_list.vue');
const goodsDetail = require('./pages/goods/goods_detail.vue');
const wxPaySuccess = require('./pages/pay/wxpay_success.vue');
const paymentMode = require('./pages/pay/payment_mode.vue');
const newOpen = require('./pages/home/new_open.vue');
const setting = require('./pages/user/setting.vue');
const login = require('./pages/user/login.vue');
const lucky = require('./pages/user/lucky.vue');
const share = require('./pages/goods/share.vue');
const helplist = require('./pages/help/list.vue');
const helpInfo = require('./pages/help/info.vue');
const address = require('./pages/user/address.vue');
const addAddress = require('./pages/user/add-address.vue');
const map = require('./pages/user/map.vue');
const purchaseHistory = require('./pages/user/purchase-history.vue');





export default new VueRouter({
    //mode: 'history',
    routes: [
        { path: '*', component: NotFond },
        { path: '',redirect:"/home" },
        { path: '/home',component: home,
            children: [
                { path: '',component: index },
                { path: 'index',component: index },
                { path: 'mine',component:Mine },
                { path: 'shopCart',  component:ShopCart},
                { path: 'newOpen', component:newOpen },

            ]
        },
        { path: '/search', component: Search },
        { path: '/category',component:Category },
        { path: '/goodsList', component: GoodsList },
        { path: '/goodsDetail', component: goodsDetail },
        { path: '/wxPaySuccess', component:wxPaySuccess },
        { path: '/paymentMode',name:'paymentMode', component:paymentMode },
        { path: '/setting',component:setting },
        { path: '/login',component:login },
        { path: '/lucky',component:lucky },
        { path: '/share',component:share },
        { path: '/help',component:helplist,children:[
            { path: 'info/:id',component: helpInfo },
        ] },
        { path: '/address',component:address },
        { path: '/addAddress',name:"addAddress",component:addAddress },
        { path: '/selectMap',component:map },
        { path: '/purchaseHistory',component:purchaseHistory },

    ]
});