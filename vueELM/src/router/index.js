import Vue from 'vue'
import Router from 'vue-router'
import aFirst from '../components/aFirst'
import aSeachCity from  '../components/aSearchCity'
import aDeliciousFood from '../components/aDeliciousFood'

// import bMine from '../components/bMine'
// import bDeng from '../components/bDeng'
// import bXiu from '../components/bXiu'

import CeleAPP from '../components/Cmy/CeleAPP'
import  Cserver from '../components/Cmy/Cserver'
import Ccon from '../components/Cmy/Ccon'
import Cintegral from '../components/Cmy/Cintegral'
import  Cbalance from '../components/Cmy/Cbalance'
import  Cbalance2 from '../components/Cmy/Cbalance2'
import  Jifen from '../components/Cmy/Cjifen'
import Jifen2 from '../components/Cmy/Cjifen2'
import  Crecommend from '../components/Cmy/Crecommend'
import  Cdiscounts from '../components/Cmy/Cdiscounts'
import  Cdiscounts1 from '../components/Cmy/Cdiscounts1'
import  Cdaijinquan from '../components/Cmy/Cdaijinquan'
import Chistory from '../components/Cmy/Chistory'
import  Cmembercenter from '../components/Cmy/CMemberCenter'
import  Cmembercenter1 from '../components/Cmy/CMemberCenter1'
import  Cmembercenter2 from '../components/Cmy/CMemberCenter2'
import  Cmembercenter4 from '../components/Cmy/CMemberCenter4'
Vue.use(Router)

//引入vant
import { CouponCell, CouponList } from 'vant';

Vue.use(CouponCell).use(CouponList);

export default new Router({
  routes: [
    {path:'/',redirect:'/afirst'},
    {path:'/afirst',component:aFirst},
    {path:'/aseachcity',component:aSeachCity,name:'aa'},
    {path:'/adeliciousfood',component:aDeliciousFood,name:'ab'},

    // {path:'/bMine',component:bMine},
    // {path:'/bDeng',component: bDeng},
    // {path:'/bXiu',component:bXiu},

    {path: '/cele',component:CeleAPP},//跳转到下载App页面
    {path: '/cserver',component:Cserver},//服务中心页面
    {path:'/ccon',component:Ccon},//服务中心页面跳转的组件
    {path:'/cintegral',component:Cintegral},//积分商城
    {path:'/cbalance',component:Cbalance},//我的余额
    {path:"/cbalance2",component:Cbalance2},//余额问题
    {path:"/jifen",component:Jifen},//我的积分
    {path:"/jifen2",component:Jifen2},//积分问题
    {path:"/crecommend",component:Crecommend},//推荐有奖
    {path:"/cdiscounts",component:Cdiscounts},//我的优惠
    {path:"/cdiscounts1",component:Cdiscounts1},//红包说明
    {path:"/cdaijinquan",component:Cdaijinquan},//代金券说明
    {path:"/chistory",component:Chistory},//历史红包
    {path:"/cmembercenter",component:Cmembercenter},//会员中心
    {path:"/cmembercenter1",component:Cmembercenter1},//会员说明
    {path:"/cmembercenter2",component:Cmembercenter2},//在线支付
    {path:"/cmembercenter4",component:Cmembercenter4}//购买记录
  ]
})
