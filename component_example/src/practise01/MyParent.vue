<template>
  <div>
    <my-child :titles="dataTitles" @clickTitle="changeContent"></my-child>
    <h2>{{ dataContents[currentIndex] }}</h2>
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
        dataTitles: ["衣服", "鞋子", "裤子"],
        dataContents: ["衣服页面", "鞋子页面", "裤子页面"],
        currentIndex: 0
      }
    },
    methods: {
      changeContent(index) {
        console.log("-------");
        console.log(index);
        console.log("-------");
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

</style>