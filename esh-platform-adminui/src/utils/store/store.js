/**
 * Created by Administrator on 2018/7/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: null,
    isShow: false
  },
  actions: {
    btnLink (item) {
      var len = item.orders
      for (var i = 0; i < len; i++) {
        if (item.orders === 1) {
          this.$router.push({ path: '/home/index-system/member' }, { name: 'member' })
        }
        if (item.orders === 2) {
          this.$router.push({ path: '/home/index-system/role' }, { name: 'role' })
        }
        if (item.orders === 3) {
          this.$router.push({ path: '/home/index-system/menu' }, { name: 'menu' })
        }
      }
    }
  },

  mutations: {
    // btnLink(item){
    //   console.log(3)
    // },
    // loading是否显示
    [types.ISSHOW]: (state, data) => {
      state.isShow = data
    },
    [types.LOGIN]: (state, data) => {
      localStorage.token = data.token
      state.token = data.token
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      state.token = null
    },
    // [types.TITLE]: (state, data) => {
    //   state.title = data;
    // },
    [types.ISLOGIN]: (state, data) => {
      state.isLogin = data.isLogin
    },
    [types.ROLECODE]: (state, data) => {
      state.roleCode = data.roleCode
    },
    [types.PERMISSIONS]: (state, data) => {
      state.permissions = data.permissions
    }
  },
  getters: {
    // btnLink:state=>{
    //   console.log(item)
    // }
  }
})
