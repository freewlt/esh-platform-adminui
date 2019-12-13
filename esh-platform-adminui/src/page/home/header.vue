<template>
  <div class="headBox">
    <img :src="logo" class="logo" title="汽车易生活">
    <el-dropdown @command="handleCommand" class="dropDown">
      <span class="el-dropdown-link">
        <i class="iconfont icon-yonghu header-icon"></i>{{ username }}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="repwd"><i class="iconfont header-icon icon-xiugaimima"></i>修改密码</el-dropdown-item>
        <el-dropdown-item command="logout"><i class="iconfont icon-zhuxiao header-icon"></i>注销登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from '@/utils/index'
import store from '@/utils/store/store'
import * as types from '@/utils/store/types'
import { Button, Message } from 'element-ui'
import { getStore } from '@/utils/localStorage'

Vue.use(Button)
export default {
  name: 'headBox',
  data () {
    return {
      logo: '../../../static/img/logo.png',
      username: getStore('username')
    }
  },
  methods: {
    handleCommand (c) {
      switch (c) {
        case 'repwd':
          alert(1)
          break
        case 'logout':
          axios.get('/logout').then((res) => {
            if (res.data.code === 0) {
              Message.success('注销成功')
              store.commit(types.LOGOUT)
              this.$router.push('/login')
            }
          })
      }
    }
  }
}
</script>

<style lang="less" scoped="">
  .headBox {
    width: 100%;
    height: 60px;
    overflow: hidden;
    box-sizing: border-box;
    .logo {
      float: left;
      padding: 13px 0 0 0;
      height: 44px;
    }
    .dropDown {
      float: right;
    }
  }

  .header-icon {
    margin-right: 8px;
    vertical-align: baseline;
  }

  .el-dropdown-link {
    display: inline-block;
    line-height: 60px;
    padding: 0 15px;
    cursor: pointer;
  }

  .el-dropdown-link:hover {
    background-color: #717584;
    color: #ffffff;
  }
</style>
