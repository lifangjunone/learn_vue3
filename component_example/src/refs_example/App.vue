<template>
  <div>
    <h2 ref="test"> 我是refs</h2>
    <nav-bar ref="navBar"></nav-bar> 
    <button @click="getElement">点击获取元素</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
  export default { 
    components: {
      NavBar
    },
    methods: {
      getElement() {
        console.log(this.$refs.test); 
        console.log(this.$refs.navBar.message);
      }
    }
  }
</script>

<style scoped>

</style>