<!-- 扩散圆 -->
<template>
  <div>
    <div class="separator" />
    <h1 class="title">预留文本框</h1>
    <div id="content">
      <div class="legend">
        <div class="skills">
          <ul>
            <!-- <li class="jq">JavaScript</li>
            <li class="css">CSS3</li>
            <li class="html">HTML5</li>
            <li class="php">PHP</li>
            <li class="sql">MySQL</li> -->
            <li class="item-5">Baseline</li>
            <li class="item-1">Greedy</li>
            <li class="item-2">Graph</li>
            <li class="item-3">G-cut</li>
            <li class="item-4">Geo-cut</li>
          </ul>
        </div>
      </div>
      <div id="diagram"></div>
    </div>

    <div class="get">
      <div class="arc">
        <span class="text">Greedy</span>
        <input type="hidden" class="percent" value="cost[0]" />
        <input type="hidden" class="color" value="#97BE0D" />
      </div>

      <div class="arc">
        <span class="text">Graph</span>
        <input type="hidden" class="percent" value="cost[1]" />
        <input type="hidden" class="color" value="#D84F5F" />
      </div>

      <div class="arc">
        <span class="text">G-cut</span>
        <input type="hidden" class="percent" value="cost[2]" />
        <input type="hidden" class="color" value="#88B8E6" />
      </div>

      <div class="arc">
        <span class="text">Geo-cut</span>
        <input type="hidden" class="percent" value="cost[3]" />
        <input type="hidden" class="color" value="#BEDBE9" />
      </div>

      <!-- <div class="arc">
        <span class="text">MySQL</span>
        <input type="hidden"
               class="percent"
               value="45" />
        <input type="hidden"
               class="color"
               value="#EDEBEE" />
      </div> -->
    </div>
  </div>
</template>

<script>
import '../../../../static/js/raphael.js'
import '../../../../static/js/init.js'
import '../../../../static/js/ddlevelsmenu.js'

export default {
  props: ['cost'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
body {
  background: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #333;
  line-height: 18px;
}

.separator {
  height: 50px;
}
.title {
  text-align: center;
}

#content {
  margin: 30px auto;
  width: 900px;
  height: 600px;
}

.legend {
  float: left;
  width: 250px;
  margin-top: 140px;
}
#content h1 {
  font-family: 'Cabin Sketch', arial, serif;
  text-shadow: 3px 3px 0 #ddd;
  color: #193340;
  font-size: 40px;
  height: 48px;
  line-height: 48px;
  margin-bottom: 40px;
  text-align: right;
}
/* skills */
.skills {
  float: left;
  clear: both;
  width: 100%;
}
.skills ul,
.skills li {
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
}
.skills li {
  float: right;
  clear: both;
  padding: 0 15px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  margin-bottom: 1px;
  font-size: 18px;
}
.skills .item-1 {
  background: #97be0d;
}
.skills .item-2 {
  background: #d84f5f;
}
.skills .item-3 {
  background: #88b8e6;
}
.skills .item-4 {
  background: #bedbe9;
}
.skills .item-5 {
  background: #edebee;
}
#diagram {
  float: right;
  width: 600px;
  height: 600px;
}
.get {
  display: none;
}
</style>
