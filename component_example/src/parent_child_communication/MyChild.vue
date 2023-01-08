<template>
  <div>
    <h2 :name="$attrs.name">{{title}}</h2>
    <p>{{ content }}</p>
    <p>{{ info.message }}</p>
  </div>
</template>

<script>

  export default {
    // props: ['title', 'content']
    // 禁用继承
    inheritAttrs: false,
    props: {
      title: String,
      // content: String,
      content: {
        type: String,
        // required: true,
        default: "牛逼"
      },
      info: {
        type: Object,
        default() {
          return {message: "最牛逼"}
        }
      }
    }
  }
</script>

<style scoped>

</style>