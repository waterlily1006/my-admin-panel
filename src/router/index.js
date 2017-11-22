import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'
/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/gameInfo',
    component: Layout,
    redirect: '/gameInfo/basicInfo',
    name: '游戏信息配置',
    icon: 'people',
    noDropdown: false,
    children: [
      { path: 'basicInfo', component: _import('gameInfo/basicInfo'), name: '基本信息' },
      { path: 'serviceList', component: _import('gameInfo/serviceList'), name: '服列表管理' },
      { path: 'gameVersion', component: _import('gameInfo/gameVersion'), name: '游戏版本管理' },
      { path: 'plan', component: _import('gameInfo/plan'), name: '计划管理' },
      { path: 'link', component: _import('gameInfo/link'), name: '链接配置' },
      { path: 'interface', component: _import('gameInfo/interface'), name: '接口模拟' }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/sdk',
    component: Layout,
    name: 'SDK模块配置',
    icon: 'lock',
    noDropdown: false,
    children: [
      { path: 'sdkConfig', component: _import('sdk/sdkConfig'), name: 'SDK配置文件' },
      { path: 'publishVersion', component: _import('sdk/publishVersion'), name: '发布版本管理' },
      { path: 'pushPlan', component: _import('sdk/pushPlan'), name: '推送方案管理' },
      { path: 'adjustTokenMap', component: _import('sdk/adjustTokenMap'), name: 'AjustTokenMap' }
    ]
  },
  {
    path: '/site',
    component: Layout,
    name: '网站管理',
    icon: 'icon',
    noDropdown: false,
    children: [
      { path: 'seo', component: _import('site/SEO'), name: 'SEO管理' },
      { path: 'lp', component: _import('site/LP'), name: 'LP页面管理' },
      { path: 'web', component: _import('site/web'), name: '官网页面管理' },
      { path: 'gifts', component: _import('site/gifts'), name: '活动以及礼包管理' }
    ]
  },
  {
    path: '/operate',
    component: Layout,
    redirect: '/components/index',
    name: '运营相关',
    icon: 'component',
    children: [
      { path: 'watch', component: _import('operate/watch'), name: 'Watch ' },
      { path: 'userSearch', component: _import('operate/userSearch'), name: '用户查询' }
    ]
  },
  {
    path: '/pay',
    component: Layout,
    redirect: 'noredirect',
    name: '支付相关',
    icon: 'example',
    children: [
      { path: 'set', icon: 'form', component: _import('pay/set'), name: '套餐配置' },
      { path: 'log', icon: 'form', component: _import('pay/log'), name: '日志查询' }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
