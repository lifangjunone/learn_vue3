<template>
  <div>
    <button v-for="item in tabs" :key="item"
     @click="clickBtn(item)"
     :class="{active: currentItem === item }"
     >
      {{ item }}
    </button>
    <!-- <template v-if="currentItem==='home'">
      <my-home></my-home>
    </template>
    <template v-else-if="currentItem==='about'">
      <my-about></my-about>
    </template>
    <template v-else>
      <my-category></my-category>
    </template> -->

    <component :is="currentItem"
      :name=name
      :age=age
      @clickPage="myClickPage"
    ></component>
  </div>
</template>

<script>
import MyAbout from './pages/MyAbout.vue'
import MyHome from './pages/MyHome.vue'
import MyCategory from './pages/MyCategory.vue'


  export default {
    components: {
      MyAbout, 
      MyCategory,
      MyHome
    },
    data() {
      return {
        tabs: ['my-home', 'my-about', 'my-category'],
        currentItem: 'my-home',
        name: "god",
        age: 18,
      }
    },
    methods: {
      clickBtn(item) {
        this.currentItem = item
      },
      myClickPage(name, age) { 
        console.log("info:", name, age);
        this.name=name + " - niubi - " + age
      }
    }
  }
</script>

<style scoped>
  .active {
    background-color: red;
  }
</style>