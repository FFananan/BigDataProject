<!-- 饼图 -->
<template>
  <div id="pie" style="height:500px;"></div>
</template>

<script>
const echarts = require('echarts')

export default {
  data() {
    return {}
  },
  updated() {
    // console.log( time: ', this.time)
    // this.draw()
  },
  props: ['cost'],
  methods: {
    draw() {
      var total = 50 //最大温度数据单独出来定义，方便环形总数的修改
      var myChart = echarts.init(document.getElementById('pie'))
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }
      var option = {
        title: {
          // text: 'cost', //主标题
          // subtext: '26℃', //副标题
          // textStyle: {
          //   //主标题样式
          //   color: '#000',
          //   fontWeight: 'bold',
          //   fontSize: 20
          // },
          // subtextStyle: {
          //   //副标题样式
          //   color: '#fff',
          //   fontSize: 20,
          //   fontWeight: 'bold',
          //   color: '#0f0'
          // },
          left: 'center',
          top: 'middle'
        },
        tooltip: {
          show: true,
          trigger: 'item', //提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
          formatter: function(params, ticket, callback) {
            //第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调

            // return params.seriesName + ': ' + params.value + '%' //系列名称：数据值

            var color = params.color //图例颜色
            var htmlStr = '<div>'
            // htmlStr += params.name + '<br/>' //x轴的名称
            htmlStr += params.seriesName + '<br />'

            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr +=
              '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
              color +
              ';"></span>'

            //添加一个汉字，这里你可以格式你的数字或者自定义文本内容
            htmlStr += params.value + '%'

            htmlStr += '</div>'

            return htmlStr
          }
        },
        color: ['#bedbe9', '#88b8e6', '#d84f5f', '#97be0d', '#C0C0C0'], //调色盘颜色列表，默认情况下图例和饼形环图颜色使用
        legend: {
          top: '24px',
          left: '50%',
          itemHeight: 20, //图例的高度
          itemGap: 10, //图例之间的间距
          data: ['Geo-cut', 'G-cut', 'Graph', 'Greedy', 'Random(Baseline)'], //图例的数据数组
          textStyle: {
            color: 'gray'
          },
          selectedMode: true, //图例选择模式
          orient: 'vertical' //图例布局方式
        },
        series: [
          {
            name: 'Geo-cut',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [200, 220],
            itemStyle: placeHolderStyle,
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.cost[0],
                itemStyle: {
                  normal: {
                    color: '#bedbe9'
                  }
                }
              },
              {
                value: 50 - this.cost[0],
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name: 'G-cut',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [170, 190],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: this.cost[1],
                itemStyle: {
                  normal: {
                    color: '#88b8e6'
                  }
                }
              },
              {
                value: this.cost[1],
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name: 'Graph',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [140, 160],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: this.cost[2],
                itemStyle: {
                  normal: {
                    color: '#d84f5f'
                  }
                }
              },
              {
                value: 50 - this.cost[2],
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name: 'Greedy',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [110, 130],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: this.cost[3],
                itemStyle: {
                  normal: {
                    color: '#97be0d'
                  }
                }
              },
              {
                value: 50 - this.cost[3],
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          },
          {
            name: 'Random(Baseline)',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [80, 100],
            itemStyle: placeHolderStyle,
            data: [
              {
                value: this.cost[4],
                itemStyle: {
                  normal: {
                    color: '#C0C0C0'
                  }
                }
              },
              {
                value: 50 - this.cost[4],
                itemStyle: {
                  normal: {
                    color: 'transparent'
                  }
                }
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  watch: {
    cost: function(newCost, oldCost) {
      // console.log("oldtime: " + oldTime);
      // this.data = newTime;
      this.draw()
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style lang="scss" scoped></style>
