<template>
  <div>
    <async-home></async-home>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const AsyncHome = defineAsyncComponent(()=> import("./AsyncHome.vue"))
  export default {
    components: {
      AsyncHome
    }
  }
</script>

<style scoped>

</style>