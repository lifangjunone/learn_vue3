<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <button>按钮</button>
      </template>
      <template v-slot:center>
        <span slot:center>内容</span>
      </template>
      <template #right>
        <button slot:left>按钮</button>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
  export default {
    components: {
      NavBar
    }
    
  }
</script>

<style scoped>

</style>