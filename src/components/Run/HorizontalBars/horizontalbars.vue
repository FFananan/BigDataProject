<!-- 柱状图 -->
<template>
  <div id="myChart"></div>
</template>

<script>
const echarts = require('echarts')

export default {
  props: ['time'],

  data() {
    return {}
  },
  updated() {
    // console.log( time: ', this.time)
    // this.draw()
  },
  methods: {
    draw() {
      const self = this
      // console.log(this.data)

      // 初始化echarts实例
      // let myChart = this.$echarts.init(document.getElementById('myChart'))
      let myChart = echarts.init(document.getElementById('myChart'))

      // 绘制图表
      var option = {
        title: {
          //text: '',
          //subtext: ''
        },
        // color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          display: 'inline-block',
          width: 'auto'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            name: 'time',
            type: 'value'
          }
        ],
        yAxis: [
          {
            name: 'algorithm',
            type: 'category',
            data: ['Geo-cut', 'G-cut', 'Graph', 'Greedy', 'Random(Baseline)'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],

        series: [
          {
            name: 'time',
            type: 'bar',
            barWidth: '60%',
            // data: [0.0823424, 0.0745589, 0.0393887, 0.021384, 0.0473886],
            data: this.time,
            itemStyle: {
              //通常情况下：
              normal: {
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function(params) {
                  // var colorList = ['#01579B', '#0288D1', '#03A9F4', '#4FC4F7', '#B3E5FC'];
                  var colorList = [
                    '#bedbe9',
                    '#88b8e6',
                    '#d84f5f',
                    '#97be0d',
                    '#C0C0C0'
                  ]
                  return colorList[params.dataIndex]
                }
              },
              //鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationDelay: function(idx) {
              const params = [200, 400, 600, 800, 1000]
              // console.log('self.sortArray', self.sortArray)
              // console.log('this time is', self.time[idx])
              const index = self.sortArray.indexOf(self.time[idx])
              // console.log('index is', index)
              // console.log('self.time', self.time)
              return params[index]
            }
          }
        ]
        // animationEasing: 'elasticOut',
        // animationDelayUpdate: function(idx) {
        //   return idx * 5
        // }
      }

      //防止越界，重绘canvas
      myChart.clear()
      // myChart.dispose()
      // window.onresize = myChart.resize
      myChart.setOption(option) //设置option
    }
  },
  watch: {
    time: function(newTime, oldTime) {
      // console.log("oldtime: " + oldTime);
      // this.data = newTime;
      // this.sortArray = this.time.sort()
      // console.log('watch this.sortArray', this.sortArray)
      this.draw()
    }
  },
  computed: {
    sortArray() {
      console.log('sort', this.time.sort())
      return this.time.sort()
    }
  },
  mounted() {
    // let myChart = echarts.init(document.getElementById('myChart'))
    // myChart.dispose()
    this.draw()
  }
}
</script>
<style lang="scss" scoped></style>
