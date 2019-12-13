<template>
  <div class="breadCrumbBox">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="breakLink" v-for="item in breadList" :to="{path:item.path}" :key="item.path">{{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadCrumbBox',
  data () {
    return {}
  },
  props: ['breadList']
}
</script>

<style lang="less" scoped>
  .breadCrumbBox {
    width: 100%;
    padding: 20px 0;
    border-bottom:1px solid #ccc;
  }

</style>
