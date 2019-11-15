<template>
  <div>
    <!-- 这里放置一个导航栏 -->
    <headerNav />
    <!-- <h1>这是app界面</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from "./components/HeaderNav/headerNav";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    headerNav
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
body {
  height: 100%;
  background-color: #333;
  color: #fff;
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
}
</style>
