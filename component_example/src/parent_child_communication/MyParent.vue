<template>
  <div id="app">
    <div>
      <my-child title="我是标题1" content="我是内容1"></my-child>
      <my-child title="我是标题2" content="我是内容2"></my-child>
      <my-child title="我是标题3" content="我是内容3"></my-child>
    </div>
    <hr>
    <div>
      <my-child v-bind:title="data_title" :content="data_content"></my-child>
    </div>
  </div>
</template>

<script>
import MyChild from './MyChild.vue'
  export default {
    components: { MyChild },
    data() {
      return {
         data_title: "我是data中的标题",
         data_content: "我是data中的内容"
      }
    }
  }
</script>

<style scoped>

</style>