<template>
  <div class="mapBox">
    <iframe id="f" width="100%" height="500px" frameborder=0
    src=" https://apis.map.qq.com/tools/routeplan/eword=故宫博物馆&epointx=116.39710&epointy=39.917200?referer=myapp&key=EQLBZ-W5AKJ-5RIF7-KZMBU-GNUCT-BEFGR">
    </iframe>
    <div id="atlas"></div>
  </div>
</template>

<script>
import { TMap } from '../api/parking'
export default {
  name: 'mapBox',
  data () {
    return {
      loc: '',
      module: 'locationPicker',
      latlng: {
        lat: 39.998766,
        lng: 116.273938
      },
      poiaddress: '北京市海淀区新建宫门路19号',
      poiname: '颐和园',
      cityname: '北京市'

    }
  },
  methods: {
    mapTX () {
      TMap().then(qq => {
        var map = new qq.maps.Map(document.getElementById('atlas'), {
          // 这里经纬度代理表进入地图显示的中心区域
          center: new qq.maps.LatLng(22.53588500, 113.95251400),
          zoom: 13
        })
        // 绑定单击事件添加参数
        qq.maps.event.addListener(map, 'click', function (event) {
          alert('您点击的位置为: [' + event.latLng.getLat() + ', ' +
            event.latLng.getLng() + ']')
        })
      })
    }
  },
  created () {
    this.mapTX()
    window.addEventListener('message', function (event) {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
      var loc = event.data
      if (loc && loc.module == 'locationPicker') { // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
        console.log('location', loc)
      }
    }, false)
  }
}
</script>

<style lang="less" scoped>
  .inputBox {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
    margin: 10px 0;
    font-size: 13px;
    .title {
      display: inline-block;
      vertical-align: middle;
      min-width: 80px;
      text-align: left;
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
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 83%;
      white-space: nowrap;
      .uploadInput {
        width: 88%;
      }
      .upload-demo {
        display: inline-block;
        vertical-align: middle;
        margin-left: 2%;
        .el-button--small, .el-button--small.is-round {
          padding: 12px 15px;
        }

      }
    }
  }
</style>
