<template>
  <div class="first">
    <aside-box :list="list"></aside-box>
  </div>
</template>

<script>
import AsideBox from './menu'
import globalAPI from '@/utils/api'
import { get } from '@/utils/index.js'

const pathMap = {
  '12029857621868544': '/home/index-system/member',
  '12030099176030208': '/home/index-system/card',
  '12030299793784832': '/home/index-system/menu',
  '37449063930527742': '/home/index-system/member',
  '70659339181883352': '/home/index-system/role',
  '37449063930527722': '/home/index-system/role',
  '13099012202692608': '/home/index-system/area',
  '13499244367314944': '/home/index-system/organization',
  '132365441262682112': '/home/index-system/recharge',
  '15587894823485440': '/home/index-system/EMember',
  '1': '/home/index-system/member',
  '2': '/home/index-system/member',
  '3': '/home/index-system/menu',
  '4': '/home/index-system/member',
  '5': '/home/index-system/menu',
  '6': '/home/index-system/member',
  '7': '/home/index-system/member',
  '8': '/home/index-system/menu',
  '9': '/home/index-system/menu',
  '10': '/home/index-system/menu',
  '11': '/home/index-system/menu',
  '12': '/home/index-system/member',
  '13': '/home/index-system/member',
  '14': '/home/index-system/member',
  '15': '/home/index-system/member',
  '16': '/home/index-system/member',
  '17': '/home/index-system/member'
}
export default {
  name: 'first',
  components: { AsideBox },
  data () {
    return {
      list: []
    }
  },
  created () {
    const _this = this
    get(globalAPI.systemMenuData).then(res => {
      _this.list = res.list
      _this.list.map(function (item) {
        item.path = pathMap[item.id]
        if (item.children) {
          item.children = item.children.map(function (subItem) {
            subItem.path = pathMap[subItem.id]
            return subItem
          })
        }
        return item
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .first{
    height:100%;
    .aside{
      width:200px;
    }
  }

  .el-submenu {
    text-align: left;
  }

  .el-menu-item {
    text-align: left;
  }
</style>
