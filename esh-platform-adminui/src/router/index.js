import Vue from 'vue'
import Router from 'vue-router'
import store from '../utils/store/store'
import * as types from '../utils/store/types'
import login from '../page/login/loginNew.vue'
import home from '../page/home/home'
import indexSys from '../page/views/index-system.vue'
import frame from '../page/home/welcome.vue'
import member from '../page/views/member/member'
import memberNew from '../page/views/member/member-new'
import area from '../page/views/area/area'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: login
    },
    {
      path: '/login',
      name: 'loginBox',
      component: login
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/',
          component: indexSys,
          children: [
            {
              path: '/',
              component: frame
            }
          ]
        },
        {
          path: 'index-system',
          component: indexSys,
          children: [
            {
              path: '/',
              component: frame
            },
            {
              path: 'member',
              name: 'member',
              component: member
            },
            {
              path: 'member-new',
              component: memberNew
            },
            {
              path: 'area',
              name: 'areaBox',
              component: area
            }
          ]
        }
      ]
    }
  ]
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.ROLECODE, { roleCode: window.localStorage.getItem('roleCode') })
  store.commit(types.PERMISSIONS, { permissions: window.localStorage.getItem('permissions') })
  store.commit(types.LOGIN, { token: window.localStorage.getItem('token') })
} else {
  store.commit(types.LOGOUT)
  routers.replace({
    path: '/login',
    query: { redirect: routers.currentRoute.fullPath }
  })
}

routers.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

routers.afterEach((route) => {
  if (route.path === '/login') {
    store.commit(types.ISLOGIN, { isLogin: true })
  } else {
    store.commit(types.ISLOGIN, { isLogin: false })
  }
})
export default routers
