<template>
  <div>
    <button @click="mixinTest">点我</button>
    <hr>
    {{ message }} - {{ globalInfo }}
    <my-base></my-base>
  </div>
</template> 

<script>
import { demoMixin } from './mixins/demoMixin';
import MyBase from './extend/MyBase.vue'
  export default {
    mixins: [demoMixin],
    components: {
      MyBase
    },
    data() {
      return {
        title: "标题"
      }
    },
    methods: {
      test() {
        console.log("test");
      }
    }
  }
</script>

<style scoped>

</style>