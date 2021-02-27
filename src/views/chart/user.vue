<template>
  <div class="container">
    <div id="main" style="width: 1000px;height: 500px;">

    </div>
  </div>
</template>

<script>
  import * as echart from 'echarts'
  import { getEchartsUser, getEchartsCate } from '../../api/common'

  export default {
    name: 'chart',
    data() {
      return {
        opinionData: []
      }
    },
    mounted() {
      this.initEcharts()
    },

    methods: {
      async initEcharts() {
        await getEchartsCate().then(res => {
          if (res.success) {
            console.log(res.data.data)
            this.opinionData = []
            this.opinionData = res.data.data
          }
        })

        let myChart = echart.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption(

          {
            title: {
              text: '手机上架数量图',
              left: 'center',top: 20,
              textStyle: {
                color: '#5a98de'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left',
            },
            series: [
              {
                name: '数量',
                type: 'pie',
                radius: '50%',
                data:  this.opinionData,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }


        )
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  #main {
    margin: 20px auto;
  }
</style>
