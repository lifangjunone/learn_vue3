<template>
  <div id="app">
    <h2>当前计数： {{ counter }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <my-child 
      @add="addone" 
      @sub="subone" 
      @addN="addNum"
      @smt="submitInfo"
    ></my-child>
  </div>
</template>

<script>
import MyChild from './MyChild.vue';
  export default {
    components: {
      MyChild
    },
    data() {
      return {
        counter: 0,
        name: "",
        age: 0
      }
    },
    methods: {
      addone() {
        this.counter ++
      },
      subone() {
        this.counter --
      },
      addNum(num) {
        this.counter += num
      },
      submitInfo(name, age) {
        this.name = name
        this.age = age
      }
    }
  }
</script>

<style scoped>

</style>