<template>
  <div>
    <div class="tab-control">
      <div 
          class="tab-control-item"
          :class="{active: currentIndex === index}"
          @click="titleClick(index)"
          v-for="(title, index) in titles" :key="title">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    emits: {
      clickTitle: (index) => {
        console.log(index);
        return true
      } 
    },

    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit("clickTitle", index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    padding-top: 5px;
  }
  .tab-control-item {
    flex: 1;
    text-align: center;
    color: white;
    font-size: larger;
    background: pink;
    padding-bottom: 2px;
    border-top: 3px solid greenyellow;
    border-left: 3px solid greenyellow;
    border-right: 3px solid greenyellow;
    border-bottom: 3px solid greenyellow;
    border-radius: 10px;
  }

  .tab-control-item.active {
    color: yellow;
  }

  .tab-control-item.active span {
    border-bottom: 5px solid yellow;
    padding: 3px 10px;
  }
</style>