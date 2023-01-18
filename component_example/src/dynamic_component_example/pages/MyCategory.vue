<template>
  <div>
    <h2 @click="counter ++">我是Category</h2>
    {{ counter }}
  </div>
</template>

<script>
  export default {
   name:"my-category",
   data() {
    return {
      counter: 0
    }
   }
  }
</script>

<style scoped>

</style>