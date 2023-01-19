<template>
  <div>
    <hr>
    {{ about }}
    <hr>
    <button @click="aboutFun"> about </button>
  </div>
</template>

<script>
import MyAbout from './MyAbout.vue'
  export default {
    extends: MyAbout
  }
</script>

<style scoped>

</style>