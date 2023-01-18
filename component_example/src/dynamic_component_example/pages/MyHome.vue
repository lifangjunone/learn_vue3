<template>
  <div @click="clickPage(name, age)">
    <h2>我是Home</h2>
    <span>Persion info: {{ name }} - {{ age }}</span>
  </div>
</template>

<script>
  export default {
    name: "my-home",
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ['clickPage'],
    methods: {
      clickPage(name, age) {
        this.$emit("clickPage", name, age)
      }
    }
  }
</script>

<style scoped>

</style>