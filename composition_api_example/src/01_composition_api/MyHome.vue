<template>
  <div>
    {{ title }}
    <hr>
    <!-- {{ params.counter }} -->
    {{ counter }}
    <hr>
    <button @click="clickBtn">按钮</button>
  </div>
</template>

<script>
import { ref } from 'vue'

  export default {
    props: {
      title: {
        type: String,
        require: true,
      }
    },
    setup() {
      // const params = reactive({
      //   counter:10
      // })

      let counter = ref(10)

      const clickBtn = () => {
        counter.value ++ 
        console.log(counter.value);
        // params.counter ++
        // console.log(params.counter);
      }
      return {
        // params,
        counter,
        clickBtn
      }
    }
  }
</script>

<style scoped>

</style>