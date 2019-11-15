<!--  -->
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <h1>这是项目2的界面</h1> -->
      <sideNav />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <router-view></router-view>
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
<style lang="scss" scoped></style>
