<template>
  <div>
    <button @click="addName">+name</button>
    <my-home></my-home>
  </div>
</template>

<script>
import MyHome from './MyHome.vue';
import {computed} from 'vue'
  export default {
    components: {
      MyHome
    },
    provide(){
      return {
        name: "张三",
        age: 18,
        sex: "男",
        hobby: computed(() => this.hobby) 
       }
    }, 
    data() {
      return {
        hobby: ["吹牛", "夸人", "打麻将"]
      }
    },
    methods: {
      addName() {
        this.hobby.push("最牛逼")
      }
    }
  }
</script>

<style scoped>

</style>