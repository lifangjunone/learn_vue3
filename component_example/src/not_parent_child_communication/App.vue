<template>
  <div>
    <my-home></my-home>
  </div>
</template>

<script>
import MyHome from './MyHome.vue';
  export default {
    components: {
      MyHome
    },
    provide(){
      return {
        name: "张三",
        age: 18,
        sex: "男",
        hobby: this.hobby
       }
    },
    data() {
      return {
        hobby: ["吹牛", "夸人", "打麻将"]
      }
    }
  }
</script>

<style scoped>

</style>