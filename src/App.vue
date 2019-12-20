<template>
  <div>
    <!-- 这里放置一个导航栏 -->
    <headerNav />
    <!-- <h1>这是app界面</h1> -->
    <div class="animateBox">
      <transition :name="transitionName"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import headerNav from "./components/HeaderNav/headerNav";
export default {
  name: "App",
  data () {
    return {
      transitionName: "right",
      routeArr: ["/home", "/pro1/intro", "/pro2/intro"]
    };
  },
  methods: {},
  components: {
    headerNav
  },
  watch: {
    $route: function (to, from) {
      var compare;
      compare =
        this.routeArr.indexOf(to.path) > this.routeArr.indexOf(from.path);
      console.log(compare);
      this.transitionName = compare == true ? "right" : "left";
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  height: 100%;
  // background-color: #333;
  color: #fff;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}

.animateBox {
  width: 100%;
  overflow: hidden;
}
.right-enter {
  opacity: 0;
  transform: translateX(100%);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.right-enter-active,
.right-leave-active {
  transition: all 0.5s ease;
}

.left-enter {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.left-enter-active,
.left-leave-active {
  transition: all 0.5s ease;
}
</style>
