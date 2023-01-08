<template>
  <div class="main">
    <my-main-banner></my-main-banner>
    <my-main-product-list></my-main-product-list>
  </div>
</template>

<script>
import MyMainBanner from './MyMainBanner.vue'
import MyMainProductList from './MyMainProductList.vue'

  export default {
  components: { MyMainBanner, MyMainProductList },
  }
</script>

<style scoped>

</style>