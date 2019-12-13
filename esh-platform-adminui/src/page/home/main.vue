<template>
  <div class="mainBox">
    <!--菜单-->
    <div class="navBtn">
      <router-link :to="{path:item.path}" v-for="item in tabList" :tabList="tabList" :activeTab="activeTab"
                   class="navLink" :key="item.path">
        <span><i class="el-icon-date"></i> {{item.txt}}</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'mainBox',
  data () {
    return {
      //        isActive: 0,
      //        none: 0,
      activeTab: '1',
      activeName: '1',
      tabList: [
        {
          txt: '系统管理',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dnq8ig861f16cvg6tf16367.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dmmt51gij17c391u4f51atj5.png',
          path: '/home/index-system'
        },
        {
          'txt': '数据统计',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dvnhqh5dt1i1s0p10dc8rf7.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dvj3d63gt2h15jl231t2e5.png',
          path: '/home/index-data'
        },
        {
          'txt': '公文包',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g9e8sfpaobh2g41elbpcm7.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6g9af41p6q1l4d186m1vvdno25.png',
          path: '/home/index-bag'
        },
        {
          'txt': '油站管理',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/22/p1ao85oi9gi7v31419suhvme5b7.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/22/p1ao85oftvb2b94f15ci2id1of85.png',
          path: '/home/indexOil'
        },
        {
          'txt': '微信管理',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dodpm17hh1fk313c519m5dee7.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6do9r51nla1vlr85u1vbi1qst5.png',
          path: '/home/indexWx'
        },
        {
          'txt': 'CRM管理',
          'pic': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dots01jm8bn01ban167a1rvk7.png',
          'picActive': 'http://192.168.0.8:8083/image/upload/image/menu/2016/07/21/p1ao6dopug5mb26n1lhl1juhkqm5.png',
          path: '/home/indexCrm'

        },
        {
          'txt': '订单管理',
          'pic': 'http://ijyimg.tunnel.e-autolife.com/image/upload/image/menu/2018/03/30/p1c9q8eclf19m31rg4pp81gm41fu67.png',
          'picActive': 'http://ijyimg.tunnel.e-autolife.com/image/upload/image/menu/2018/03/30/p1c9q8e5vogul1qlc8pcalia5j5.png',
          path: '/home/indexOrder'
        }
      ]
    }
  }
}
</script>
<style lang="less">
  .mainBox {
    clear: both;
    height: 90%;
    border-top:1px solid #ccc;
    background: #e8e8e8;
    .navTab {
      height: 100%;
      background: #e8e8e8;
      .el-tab-pane {
        height: 100%;
        .el-container {
          height: 91%;
          .el-container {
            height: 100%;
          }
        }
      }
    }
  }

  .navBtn {
    clear: both;
    width: 100%;
    height: 70px;
    background: #fff;
    margin-bottom:8px;
    .navLink {
      display: block;
      float: left;
      width: 140px;
      height: 70px;
      span {
        display: block;
        text-align: center;
        i{
          display: block;
          padding:13px 0 5px;
          font-size:24px;
        }
      }
    }
    .router-link-active{
      background: #f4f4f4;
      color: #409EFF;
    }
  }

  .mainBox {
    height: 100%;
    .el-container{
      position: relative;
      width:100%;
      height:100%;
      border-top:none;
    }
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

</style>
