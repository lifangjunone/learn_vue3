<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>

  export default {
    props: ['title', 'content']
  }
</script>

<style scoped>

</style>