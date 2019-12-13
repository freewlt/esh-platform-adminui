<template>
  <div class="loginBox">
    <div class="header">
      <div class="header-in">
        <img src="../../../static/img/login/logo.png" class="logo">
      </div>
    </div>
    <div class="content">
      <div class="content-in">
        <div class="design">
          <h3>系统登录<br><span>SYSTEM  LOGIN</span></h3>
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm">
            <div class="login_ph">
              <input type="text" placeholder="用户编号：" class="login_phone">
            </div>
            <div class="login_ph login_pa">
              <input type="text" placeholder="密码：" class="login_phone">
            </div>
            <div class="verify">
              <div class="login_ph login_num">
                <input type="text" placeholder="验证码：" class="login_phone">
              </div>
              <div id="verificationCode" class="login_btn verificationCode">
                <canvas width="100" height="40" id="verifyCanvas"></canvas>
                <img id="code_img">
              </div>
            </div>
            <el-button class="login" @click="submitForm('loginForm')">登录</el-button>
          </el-form>
          <div class="error">这里显示错误信息！</div>
          <span class="org_bot_cor"></span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-in">
        <ul class="Ulist">
          <li v-for="item in listFooter" :key="item.title">
            <a class="Apic">
              <img :src="item.pic">
            </a>
            <p>{{item.title}}</p>
          </li>
        </ul>
        <p class="copyright">©易生活版权所有©2015All Rights Resvered</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import globalAPI from '@/utils/api'
import { get } from '@/utils/index.js'
// import store from '@/utils/store/store'
import * as types from '@/utils/store/types'

export default {
  name: 'loginBox',
  data () {
    const validateusername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        let validCardNo = /^[A-Za-z0-9]{1,3}$/
        if (!validCardNo.exec(this.loginForm.username)) {
          callback(new Error('请输入正确账号'))
        }
        callback()
      }
    }
    const validatepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        var password = /^[A-Za-z0-9]{6}$/
        if (!password.exec(this.loginForm.password)) {
          callback(new Error('密码格式不对'))
        }
        callback()
      }
    }
    const validatecode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        let validCardNo = /^[A-Za-z0-9]{1,4}$/
        if (!validCardNo.exec(this.loginForm.username)) {
          callback(new Error('请输入验证码'))
        }
        callback()
      }
    }
    return {
      remember: false,
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { validator: validateusername, trigger: 'blur' }
        ],
        password: [
          { validator: validatepassword, trigger: 'blur' }
        ],
        code: [
          { validator: validatecode, trigger: 'blur' }
        ]
      },
      listFooter: [
        { title: '车辆管理', pic: require('../../../static/img/login/list1.png') },
        { title: '福利管理', pic: require('../../../static/img/login/list2.png') },
        { title: '司机管理', pic: require('../../../static/img/login/list3.png') },
        { title: '信息管理', pic: require('../../../static/img/login/list4.png') },
        { title: '发票管理', pic: require('../../../static/img/login/list5.png') },
        { title: '系统设置', pic: require('../../../static/img/login/list6.png') },
        { title: '权限管理', pic: require('../../../static/img/login/list7.png') }
      ]
    }
  },
  methods: {
    submitForm (form) {
      window.localStorage.clear()
      this.$refs[form].validate((valid) => {
        if (valid) {
          const _this = this
          const showLoading = (show) => {
            _this.$store.commit(types.ISSHOW, show)
          }
          get(globalAPI.login, { username: this.loginForm.username, password: this.loginForm.password }, { showLoading })
            .then(function (res) {
              if (res.status === 200) {
                _this.$router.push('/home')
              }
            }).catch(function (error) {
              Message.error(error)
            })
        } else {
          Message.error('登录失败')
          return false
        }
      })
    }
  },
  created () {

  }
}
</script>
<style lang="less" scoped>
  @import '../../../static/css/common.css';

  .loginBox {
    width: 100%;
    height: 100%;
    background: url("../../../static/img/login/bg.jpg") no-repeat;
    background-size: 100% 100%;
    .header {
      width: 100%;
      background: rgba(255, 255, 255, 0.7);
      filter: alpha(opacity=70);
      .header-in {
        width: 1100px;
        height: 65px;
        margin: 0 auto;
      }
      .logo {
        padding-top: 7px;
      }
    }
    .design {
      z-index: 13;
      width: 362px;
      height: 340px;
      background: #fff;
      position: absolute;
      bottom: 25.2%;
      left: 50%;
      margin-left: -181px;
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      h3 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        span {
          color: #a7a7a7;
          font-size: 14px;
        }
      }
      .login_ph {
        width: 80%;
        margin: 0 auto 10px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        box-sizing: border-box;
        background: url(../../../static/img/login/user.png) no-repeat 10px 10px;
        background-size: 1.5em;
        border: 1px solid #0183e5;
      }
      .login_se {
        background: url(../../../static/img/login/style.png) no-repeat 10px center;
      }
      .login_ph .login_select {
        position: relative;
      }
      .login_ph .login_select select {
        display: block;
        height: 36px;
        line-height: 36px;
        width: 100%;
        padding: 3px 0 5px 45px;
        font-size: 16px;
        color: #333;
      }
      .login_ph .login_select .push {
        position: absolute;
        right: 10px;
        top: 12px;
        width: 20px;
        height: 10px;
        background: url("../../../static/img/login/push.png") no-repeat;
      }
      .login_pa {
        background: url(../../../static/img/login/password.png) no-repeat 10px 5px;
      }
      .verify {
        width: 80%;
        margin: 0 auto;
      }
      .login_num {
        float: left;
        width: 60%;
        background: url(../../../static/img/login/num.png) no-repeat 10px 5px;
      }
      .login_phone {
        width: 100%;
        height: 36px;
        line-height: 36px;
        border: none;
        text-indent: 38px;
        font-size: 16px;
        background: none;
        border-radius: 6px;
        color: #333;
        .el-input__inner{
        }
      }
      .login_btn {
        float: right;
        height: 36px;
        width: 34%;
        margin-right: 2%;
        background: url(../../../static/img/login/verify.png);
        cursor: pointer;
      }
      .el-form-item{
        width:80%;
        margin:0 auto;
      }
      .login {
        clear: both;
        width: 80%;
        height: 36px;
        margin: 10px 0 0 10%;
        background: none;
        border: none;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        color: #fff;
        background: #2f76fb;
        font-size: 20px;
        cursor: pointer;
      }
      .error {
        width: 80%;
        margin: 10px auto 0;
        color: #fb3838;
        font-size: 15px
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 25.2%;
      background: #2f76fb;
      .footer-in {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        .Ulist {
          height: 85%;
          display: flex;
          justify-content: center;
          align-items: center;
          li {
            float: left;
            width: 14.2%;
            padding-top: 2%;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            p {
              padding-top: 1%;
              font-size: 16px;
            }
          }
        }
        .copyright {
          clear: both;
          color: #fff;
          font-size: 15px;
        }
      }
    }
    .org_bot_cor {
      width: 0;
      height: 0;
      font-size: 0;
      border-width: 15px;
      border-style: solid;
      border-color: #fff transparent transparent;
      _border-color: #fff white white;
      overflow: hidden;
      position: absolute;
      left: 46%;
      bottom: -30px;
    }
    /*input内文字颜色的改变*/
    .login_phone::-webkit-input-placeholder {
      color: #ccc;
    }
    .login_phone:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #ccc;
    }
    .login_phone::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #ccc;
    }
    .login_ph .login_select select, .login_phone:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #ccc;
    }
    .login_ph .login_select select, .login_phone::-webkit-input-placeholder {
      color: #ccc;
    }
  }
</style>
