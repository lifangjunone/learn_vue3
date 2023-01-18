<template>
  <div>
    <!-- <input type="text" :value="modelValue" @input="clickBtn"> -->
    <!-- <button @click="clickBtn">按钮</button> -->
    <input v-model="value">
    <input v-model="titlevalue">
    <input v-model="ageValue">
    <h2>{{ modelValue }}</h2>
    <h2>{{ titlevalue }}</h2>
    <h2>{{ ageValue }}</h2>
  </div> 
</template>

<script>
  export default {
    props: {
      modelValue: String,
      title: String,
      age: Number,
    },
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit("update:modelValue", value) 
        }
      },
      titlevalue: {
        get() {
          return this.title
        },
        set(value) {
          this.$emit("update:title", value) 
        },
      },
      ageValue: {
        get() {
          return this.age
        },
        set(value) {
          this.$emit("update:age", value) 
        }
      }
    },
    emits: ["update:modelValue", "update:title", "update:age"],
    methods: {
      clickBtn(event) {
        this.$emit("update:modelValue", event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>