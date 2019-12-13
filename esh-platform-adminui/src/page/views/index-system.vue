<template>
  <div class="indexSys">
    <el-container class="mainBox">
      <el-aside width="200px">
        <first></first>
      </el-aside>
      <el-container>
        <el-main class="mainRt">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import First from '../home/menuSystem.vue'

export default {
  name: 'indexSys',
  components: { First },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .indexSys {
    height: 90%;
  }

  .mainRt {
    padding: 0 0 20px;
    background: #fff;
  }
</style>
