<!--  -->
<template>
  <div class="wrapper">
    <!-- <h1>运行</h1> -->
    <div class="row botton-group">
      <div
        class="botton-item col-md-4"
        v-for="(item, index) in btnValue"
        :key="index"
      >
        <button
          type="button"
          class="btn btn-primary"
          @click="switchCharts(index + 1)"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <div class="separator" />
    <div class="graph" v-if="btnIndex === 0 ? false : true">
      <h1 class="title">
        预留文本框
      </h1>
      <horizontalbars
        v-if="hackReset"
        class="hori-bars"
        :time="expData[pageIndex].time[btnIndex]"
      />
      <!-- <circlecharts v-if="hackReset" :cost="cost[btnIndex]" /> -->
      <div class="separator" />

      <h1 class="title">
        预留文本框
      </h1>
      <piecharts v-if="hackReset" :cost="expData[pageIndex].cost[btnIndex]" />
    </div>
  </div>
</template>

<script>
import horizontalbars from './HorizontalBars/horizontalbars'
// import circlecharts from './CircleCharts/circlecharts'
import piecharts from './PieCharts/piecharts'

export default {
  data() {
    return {
      btnValue: ['WV(WikiVote)', 'GW(GoogleWeb)', 'LJ(LiveJournal)'],
      hackReset: true,
      btnIndex: 0,
      pageIndex: 0,
      // index 123对应wv gw lj 二维数组内容分别代表baseline greedy graph G-cut Geo-cut
      expData: {
        0: {
          time: [
            [0.1, 0.1, 0.1, 0.1, 0.1],
            [0.0473886, 0.0212384, 0.0397887, 0.0745589, 0.00832481].reverse(),
            [2.72743, 1.72199, 1.57418, 1.17491, 1.08924].reverse(),
            [31.0081, 18.8, 20.613, 14.682, 10.122].reverse()
          ],
          cost: [
            [100, 100, 100, 100, 100],
            [0, 26.25, 25.35, 31.85, 16.54].reverse(),
            [0, 28.84, 26.73, 22.3, 22.13].reverse(),
            [0, 34.29, 33.27, 16.54, 15.9].reverse()
          ]
        }
      }
    }
  },

  methods: {
    switchCharts(index) {
      this.btnIndex = index
      // this.reload()
    },
    reload() {
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    }
  },
  mounted() {
    // console.log(this.$route.path)
    const path = this.$route.path
    if (path.includes('pro1')) {
      this.pageIndex = 0
    } else {
      this.pageIndex = 1
    }
  },

  updated() {
    // this.reload()
    // console.log(this.$route.path)
  },

  components: {
    horizontalbars,
    // circlecharts,
    piecharts
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
}
.botton-group {
  margin-top: 30px;
}
.botton-item {
  display: flex;
  justify-content: center;
}
.separator {
  height: 50px;
}
.graph .title {
  text-align: center;
}
.hori-bars {
  min-height: 450px;
}
</style>
