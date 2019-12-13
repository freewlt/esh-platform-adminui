<template>
  <div class="pageBox">
    <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" layout="total, prev, pager, next, jumper"
      :total="total" :page-size="pageSize">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'pageBox',
  data () {
    return {}
  },
  props: {
    pageCount: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    total: {
      type: Number
    },
    pageSize: {
      type: Number
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('changePage', val)
    }
  }
}
</script>
<style>
  .pageBox {
    margin: 30px auto;
  }
</style>
