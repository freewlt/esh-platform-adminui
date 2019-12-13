<template>
  <div class="memberNew">
    <bread-crumb-box :breadList="breadList"></bread-crumb-box>
    <echart-box :opinion="opinion" :opinionData="opinionData"></echart-box>
    <div class="formBox">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="formInput">
          <div class="inputBox">
            <label class="title">人员名称<span class="star">*</span></label>
            <el-form-item prop="name">
              <el-input class="input" v-model="ruleForm.name"></el-input>
            </el-form-item>
          </div>
          <div class="inputBox">
            <label class="title">手机号码<span class="star">*</span></label>
            <el-form-item prop="phone">
              <el-input class="input" v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </div>
          <div class="inputBox">
            <label class="title">人员密码<span class="star">*</span></label>
            <el-form-item prop="password">
              <el-input class="input" v-model="ruleForm.password"></el-input>
            </el-form-item>
          </div>
          <div class="inputBox">
            <label class="title">人员邮箱<span class="star">*</span></label>
            <el-form-item prop="Email">
              <el-input class="input" v-model="ruleForm.Email"></el-input>
            </el-form-item>
          </div>
          <div class="inputBox">
            <label class="title">确认密码<span class="star">*</span></label>
            <el-form-item prop="rePassword">
              <el-input class="input" v-model="ruleForm.rePassword"></el-input>
            </el-form-item>
          </div>
          <div class="inputBox">
            <label class="title">活动区域<span class="star">*</span></label>
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:86%">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </div>
          <div class="inputBox">
            <label class="title">是否可用<span class="star">*</span></label>
            <el-form-item>
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </el-form-item>
          </div>
          <upload-box :title="uploadTitle"></upload-box>
          <upload-box :title="uploadTitle2"></upload-box>
        </div>
        <div class="inputBox"></div>
        <el-form-item class="formBtn">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click.native="cancel(this.$router.go(-1))">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import globalAPI from '@/utils/api'
import { get } from '@/utils/index.js'
import BreadCrumbBox from '@/components/breadCrumb'
import UploadBox from '@/components/upload'
import EchartBox from '@/components/pie'

export default {
  name: 'memberNew',
  components: { EchartBox, UploadBox, BreadCrumbBox },
  data () {
    return {
      breadList: [],
      radio: '1',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        rePassword: [
          { required: true, message: '请确保和密码一致', trigger: 'change' }
        ]
      },
      opinion: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      opinionData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      uploadTitle: '图片',
      uploadTitle2: '背景图片'
    }
  },
  created () {
    const _this = this
    get(globalAPI.memberNew).then(function (res) {
      _this.breadList = res.breadList
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    // 提交表单
    submitForm (ruleForm) {
      var _this = this
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          get (globalAPI.memberDatas).then(function (response) {
            console.log(_this)
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }

}
</script>

<style lang="less" scoped>
  .memberNew {
    width: 96%;
    margin: 0 auto;
  }
  .formBox {
    padding: 10px 0;
    .formInput {
      font-size: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .inputBox {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 50%;
        margin: 10px 0;
        font-size: 13px;
        .title {
          min-width: 80px;
          .star {
            color: #ff453a;
            padding: 0 4px;
          }
        }
        .el-form-item {
          margin-bottom: 0;
          width: 86%;
        }
      }
      .el-radio {
        float: left;
      }
    }
    .formBtn {
      clear: both;
      margin-top: 10px;
      padding: 10px 0;
      border-top: 1px solid #ccc;
    }
  }
</style>
