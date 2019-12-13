<template>
  <div class="area">
    <bread-crumb-box :breadList="breadList"></bread-crumb-box>
    <div class="searchBox">
      <div class="left">
        <el-button type="primary">+ 新建</el-button>
      </div>
    </div>
    <div class="areaCon">
      <div class="treeBox">
        <tree :treeData ="treeData"></tree>
      </div>
      <div class="formBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <div class="formInput">
            <div class="inputBox">
              <label class="title">区域名称<span class="star">*</span></label>
              <el-form-item prop="name">
                <el-input class="input" v-model="ruleForm.name"></el-input>
              </el-form-item>
            </div>
            <div class="inputBox uploadBox">
              <label class="title">父级区域<span class="star">*</span></label>
              <div class="upload">
                <el-select v-model="ruleForm.region" placeholder="3" class="uploadInput">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-button slot="trigger" size="small" type="primary" @click="clearBtn">清空</el-button>
              </div>
            </div>
            <div class="inputBox">
              <label class="title">区域编码<span class="star">*</span></label>
              <el-form-item prop="name">
                <el-input class="input" v-model="ruleForm.name"></el-input>
              </el-form-item>
            </div>
            <div class="inputBox">
              <label class="title">车牌前缀<span class="star">*</span></label>
              <el-form-item prop="name">
                <el-input class="input" v-model="ruleForm.name"></el-input>
              </el-form-item>
            </div>
            <div class="inputBox">
              <label class="title">排序<span class="star">*</span></label>
              <el-select v-model="ruleForm.region" placeholder="3" style="width:86%">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </div>
            <div class="inputBox">
              <label class="title">排序<span class="star">*</span></label>
              <select-tree style="width:86%" :props="props"
                           :options="treeData"
                           :value="valueId"
                           :clearable="isClearable"
                           :accordion="isAccordion"
                           @getValue="getValue($event)"></select-tree>
            </div>
          </div>
          <el-form-item class="formBtn">
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click.native="cancel(this.$router.go(-1))">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import globalAPI from '@/utils/api'
import { get } from '@/utils/index.js'
import BreadCrumbBox from '@/components/breadCrumb'
import Tree from '@/components/tree/tree'
import SelectTree from '@/components/selectTree'

export default {
  name: 'areaBox',
  components: { SelectTree, Tree, BreadCrumbBox },
  data () {
    return {
      breadList: [
        { name: '首页', path: '/home' },
        { name: '人员管理', path: '/home/index-system/member' },
        { name: '修改人员信息', path: '/home/index-system/member-edit' }
      ],
      ruleForm: {
        name: '',
        region: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      treeData: [],
      isClearable: true,
      isAccordion: true,
      valueId: 20,
      props: {
        value: 'id',
        label: 'label',
        children: 'children'
      }
    }
  },
  created () {
    const that = this
    get(globalAPI.treeData).then(function (res) {
      that.treeData = res.list
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    // selectTree取值
    getValue (value) {
      this.valueId = value
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },

    // 清空图片上传
    clearBtn () {},

    // 提交表单
    submitForm (ruleForm) {
      var that = this
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          get(globalAPI.memberData).then(function (response) {
            console.log(that)
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
  .area {
    width: 96%;
    margin: 0 auto;
    .searchBox {
      display: -webkit-flex; /* Safari */
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: space-between;
      padding: 10px 0 10px 5px;
      border-bottom: 2px solid #828282;
    }
    .areaCon{
      display: flex;
      justify-content: space-between;
      padding-bottom:4%;
      .treeBox{
        width:25%;
        margin: 1% 2% 1% 0;
        border:1px solid #ccc;
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
              text-align: center;
              .star {
                color: #ff453a;
                padding: 0 4px;
              }
            }
            .el-form-item {
              margin-bottom: 0;
              width: 86%;
              display: inline-block;
            }
            .input {
              display: inline-block;
              vertical-align: middle;
              width: 100%;

            }
          }
          .uploadBox {
            position: relative;
            .title {
              min-width: 80px;
            }
            .upload {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 86%;
              .uploadInput {
                width: 100%;
                .el-button{
                  margin-left: 2%;
                }
              }
              .el-button{
                margin-left: 2%;
                .el-button--small, .el-button--small.is-round {
                  padding: 12px 15px;
                }
              }
            }
          }
        }
        .formBtn {
          clear: both;
          margin-top: 10px;
          padding: 10px 0;
          border-top: 1px solid #ccc;
        }
      }
    }
  }

</style>
