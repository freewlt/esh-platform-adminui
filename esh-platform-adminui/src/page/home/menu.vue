<template>
  <div class="asideBox">
    <el-menu class="el-menu-vertical-demo">
      <template v-for="item in list">
        <router-link :to="{path:item.path}" v-if="item.children"  :key="item.name">
          <el-submenu :key="item.name" :index="item.name" @click="menuClick(item.name)">
            <template slot="title">
              <img :src="item.name === selectedMenuId ? item.mediumBg : item.medium">
              <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :index="subItem.name" :key="subItem.name">
              <router-link :to="{path:subItem.path}">
                {{subItem.name}}
              </router-link>
            </el-menu-item>
          </el-submenu>
        </router-link>
        <router-link :to="{path:item.path}" :key="item.name" v-else>
          <el-menu-item :index="item.name" @click="menuClick(item.name)">
            <template slot="title">
              <img :src="item.name === selectedMenuId ? item.mediumBg : item.medium">
              <span>{{item.name}}</span>
            </template>
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'asideBox',
  data () {
    return {
      selectedMenuId: ''
    }
  },
  props: {
    list: {}
  },
  methods: {
    menuClick (name) {
      this.selectedMenuId = name
    }
  }
}
</script>

<style lang="less" scoped>
  .asideBox {
    height: 100%;
    ul {
      height: 100%;
      margin-bottom: 114px;
      .iconfont {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
      }
    }
  }

  .is-opened .is-active .router-link-active {
    color: #409EFF;
  }

  .titleAside {
    display: block;
    height: 100%;
    padding: 0 20px;
  }

  .el-submenu {
    background: #fff;
  }
</style>
