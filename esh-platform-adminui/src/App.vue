<template>
  <div id="app"  v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import '../static/css/common.css';
#app {
  width:100%;
  height:100%;
  min-width: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
[v-cloak] {
  display: none;
}

</style>
