<template>
  <div>
    <h2>我是组件</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "我是组件实例"
      }
    }
  }
</script>

<style scoped>

</style>