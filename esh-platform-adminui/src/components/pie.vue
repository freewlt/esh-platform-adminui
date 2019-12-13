<template>
  <div class="echartBox">
    <div id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echartBox',
  data () {
    return {
      charts: ''
    }
  },
  props: ['opinionData', 'opinion'],
  mounted () {
    this.$nextTick(function () {
      this.drawPie('main')
    })
  },
  methods: {
    drawPie (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: this.opinion
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .echartBox {
    width: 100%;
    padding: 20px 0;
    border-bottom:1px solid #ccc;
  }

</style>
