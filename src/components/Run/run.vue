<!--  -->
<template>
  <div class="wrapper">
    <!-- <h1>运行</h1> -->
    <div class="row botton-group">
      <div class="botton-item col-md-4">
        <button type="button" class="btn btn-primary" @click="switchCharts(1)">
          WV(WikiVote)
        </button>
      </div>

      <div class="botton-item col-md-4">
        <button type="button" class="btn btn-primary" @click="switchCharts(2)">
          GW(GoogleWeb)
        </button>
      </div>

      <div class="botton-item col-md-4">
        <button type="button" class="btn btn-primary" @click="switchCharts(3)">
          LJ(LiveJournal)
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
        :time="time[btnIndex]"
      />
      <circlecharts v-if="hackReset" :cost="cost[btnIndex]" />
    </div>
  </div>
</template>

<script>
import horizontalbars from './HorizontalBars/horizontalbars'
import circlecharts from './CircleCharts/circlecharts'

export default {
  data() {
    return {
      hackReset: true,
      btnIndex: 0,
      // index 123对应wv gw lj 二维数组内容分别代表baseline greedy graph G-cut Geo-cut
      time: [
        [0.1, 0.1, 0.1, 0.1, 0.1],
        [0.0473886, 0.0212384, 0.0397887, 0.0745589, 0.00832481].reverse(),
        [2.72743, 1.72199, 1.57418, 1.17491, 1.08924].reverse(),
        [31.0081, 18.8, 20.613, 14.682, 10.122].reverse()
      ],
      cost: [
        [100, 100, 100, 100],
        [26.25, 25.35, 31.85, 16.54],
        [28.84, 26.73, 22.3, 22.13],
        [34.29, 33.27, 16.54, 15.9]
      ]
    }
  },

  methods: {
    switchCharts(index) {
      this.btnIndex = index
      this.reload()
    },
    reload() {
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    }
  },

  updated() {
    // this.reload()
  },

  components: {
    horizontalbars,
    circlecharts
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
