<!--  -->
<template>
  <div class="wrapper">
    <!-- <h1>运行</h1> -->
    <div class="row botton-group">
      <div class="botton-item col-md-4">
        <button type="button"
                class="btn btn-primary">WV(WikiVote)</button>
      </div>

      <div class="botton-item col-md-4">
        <button type="button"
                class="btn btn-primary">GW(GoogleWeb)</button>
      </div>

      <div class="botton-item col-md-4">
        <button type="button"
                class="btn btn-primary">LJ(LiveJournal)</button>
      </div>

    </div>

    <div class="separator" />
    <div class="graph">
      <h1 class="title">预留文本框</h1>
      <horizontalbars class="hori-bars" />
      <circlecharts />
    </div>

  </div>
</template>

<script>
import horizontalbars from "./HorizontalBars/horizontalbars";
import circlecharts from "./CircleCharts/circlecharts"

export default {
  data () {
    return {};
  },

  methods: {},

  components: {
    horizontalbars,
    circlecharts
  },
};
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
