<template>
  <div>
    <h2 @click="counter ++">我是About</h2>
    {{ counter }}
  </div>
</template>

<script> 
  export default {
    name: "my-about",
    data()  {
      return {
        counter: 0
      }
    }
  }
</script>

<style scoped>

</style>