<template>
  <div class="outer">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ sex }}</div>
    <hr>
    <div>
      <div v-for="item in hobby" :key="item">
        <span>{{ item }}</span> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "sex", "hobby"]
  }
</script>

<style scoped>
</style>