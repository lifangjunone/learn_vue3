<template>
  <div>
    <div>{{ name  }}</div>
    <div>{{ age }}</div>
  </div>
</template>

<script>
import emitter from './utils/eventbus'
  export default {
    created() {
      emitter.on("niubi", (info) => {
        console.log(info);
        this.name = info["name"]
        this.age = info["age"]
      })
      
      emitter.on("zui", (info) => {
        console.log(info);
      })

      emitter.on("*", (type, info) => {
        console.log(type, info);
      })
    },
    data() {
      return {
        name: "",
        age: 0
      }
    }
  }
</script>

<style scoped>
</style>