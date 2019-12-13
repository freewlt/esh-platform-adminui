<template>
  <div class="custom-tree-container">
    <div class="block">
      <el-tree
        :data="treeData"
        node-key="id"
        default-expand-all
        :render-content="renderContent">
      </el-tree>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tree',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  props: ['treeData'],
  methods: {
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent (h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span><i class="el-icon-delete" on-click={ () => this.remove(node, data) }></i></span>
        </span>
      )
    }
  }
}
</script>
<style lang="less" >
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  .el-icon-delete{
    visibility: hidden;
    color: red;
  }
  }
  .custom-tree-node:hover{
  .el-icon-delete{visibility: visible;}
  }
</style>
