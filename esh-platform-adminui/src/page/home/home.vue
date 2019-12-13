<template>
  <el-container class="home">
    <el-header>
      <head-box></head-box>
    </el-header>
    <main-box></main-box>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import HeadBox from './header'
import MainBox from './main'

export default {
  name: 'home',
  components: { MainBox, HeadBox },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped="">
  .home {
    height: 100%;
    overflow: hidden;
    background: #fff;
    .mainBox{
      .mainBox{
        position: relative;
        .el-container{
          width:100%;
          height:100%;
        }
      }
    }
  }

  .el-footer {
    height: 40px;
    z-index: 99;
    text-align: center;
    background: #fff;
  }

</style>
