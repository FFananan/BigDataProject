<template>
  <div class="headerNav">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Cover</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },

  methods: {}
}
</script>
<style lang="css">
@import './headerNav.css';
div {
  width: 100%;
}
.headerNav {
    background-color: #333;
    color: white;
}
</style>
