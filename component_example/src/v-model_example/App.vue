<template>
  <div>
    <!-- <input v-model="message"/>
    <input :message="message" @input="message =  $event.target.value"> -->
    <!-- <my-input :modelValue="message" @update:model-value="message = $event"></my-input> -->
    <my-input v-model="message" v-model:title="title" v-model:age="age"></my-input>
  </div>
</template>

<script>
import MyInput from './MyInput.vue';
  export default { 
    components: {
      MyInput
    },
    data() {
      return {
        message: "你好",
        title: "牛逼",
        age: 18
      }
    }
  }
</script>

<style scoped>

</style>