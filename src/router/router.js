import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import register from '@/pages/register'
import home from '@/pages/home'
import markt from '@/pages/markt'
import personal from '@/pages/personal'
import record from '@/pages/record'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: home
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 注册页面
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // 商品页面
    {
      path: '/markt',
      name: 'markt',
      component: markt
    },
    // 个人页
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    // 交易记录页
    {
      path: '/record',
      name: 'record',
      component: record
    }],
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})
