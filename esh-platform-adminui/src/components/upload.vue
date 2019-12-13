<template>
    <div class="inputBox uploadBox">
      <label class="title">{{title}}<span class="star">*</span></label>
      <div class="upload">
        <el-form-item prop="Email" class="uploadInput">
          <el-input class="input" v-model="ruleForm.Email"></el-input>
        </el-form-item>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :multiple="false"
          :file-list="fileList"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <el-button slot="trigger" size="small" type="primary" @click="clearUploaded">选取文件</el-button>
        </el-upload>
      </div>
    </div>
</template>

<script>
export default {
  name: 'uploadBox',
  data () {
    return {
      fileList: [],
      ruleForm: {},
      rules: {
        Email: [
          { required: true, message: '请输入邮箱', trigger: 'change' }
        ]
      }
    }
  },
  props: ['title'],
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    //  清空图片上传
    clearUploaded () {
      this.$refs.upload.clearFiles()
    },
    clearUploadedImage () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style lang="less" scoped>

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
      }
      .upload-demo {
        margin-left: 2%;
        .el-button--small, .el-button--small.is-round {
          padding: 12px 15px;
        }
      }
    }
  }
</style>
