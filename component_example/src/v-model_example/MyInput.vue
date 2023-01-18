<template>
  <div>
    <button @click="clickBtn">按钮</button>
    <h2>{{ modelValue }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String
    },
    emits: ["update:modelValue"],
    methods: {
      clickBtn() {
        this.$emit("update:modelValue", "234")
      }
    }
  }
</script>

<style scoped>

</style>