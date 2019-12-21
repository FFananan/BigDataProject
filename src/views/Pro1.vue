<!--  -->
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <h1>这是项目1的界面</h1> -->
      <sideNav :path="'/pro1'"/>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <transition mode="out-in">
            <router-view :path="'/pro1'"></router-view>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import sideNav from "../components/SideNav/sideNav";

export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
  components: {
    sideNav
  },
};
</script>
<style lang="scss">
// 这里需要去掉scoped
// 设置动画在刚进场和立场之后的状态
.v-enter{
  opacity: 0;
  transform: translateY(-200%);
}
.v-leave-to{
  opacity: 0;
  transform: translateY(200%);
  position: absolute;
}
// 设置在进场和立场过程的状态，包括持续时间和方式
.v-enter-active,
.v-leave-active{
  transition-delay: 0.5s;
  transition: all 0.5s ease;
}
</style>
