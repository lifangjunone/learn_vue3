<template>
  <div id="app">
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './MyHeader.vue'
  import MyMain from './MyMain.vue'
  import MyFooter from './MyFooter.vue'

  export default {
    components: {
      MyHeader,
      MyMain,
      MyFooter
    }
  }
</script>

<style scoped>

</style>