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
              text: '鲜花种类数量',
              left: 'left',
              top: 20,
              textStyle: {
                color: '#ffac89'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [
              {
                name: '鲜花类别数量',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: this.opinionData
              }
            ]
          })

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
