<template>
  <div>
    <my-child :titles="dataTitles" @clickTitle="changeContent"></my-child>
    <div class="content">{{ dataContents[currentIndex] }}</div>
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
  .content {
    top: 50%;
    left: 50;
    color: lime;
    font-size: large;
    padding: 20% 50%;
    background: ghostwhite;
  }
</style>