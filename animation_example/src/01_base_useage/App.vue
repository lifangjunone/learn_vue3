<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h2 v-if="isShow ">Hello World</h2> 
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>

</style>