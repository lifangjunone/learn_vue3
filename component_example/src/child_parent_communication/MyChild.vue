<template>
  <div>
    <button @click="increment"> +1 </button>
    <button @click="decrement"> -1 </button>

    <hr>
    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>
    
    <hr>
    <input type="text" v-model="name" placeholder="请输入姓名">
    <input type="text" v-model="age" placeholder="请输入年龄">
    <button @click="submitValue"> 提交 </button>
  </div>
</template>

<script>
  export default {
    // emits: ["add", "sub", "addN", "smt"],
    // 对象的方式 主要作用是 做参数的校验
    emits: {
      add: null,
      sub: null,
      addN: (num) => {
        console.log(num);
        return true
      },
      smt: (name, age) => {
        console.log(name, age);
        return true
      }
    },

    data() {
      return {
        num: 0,
        name: "",
        age: 0
      }
    },

    methods: {
      increment() {
        console.log("+1");
        this.$emit("add")
      },
      decrement() {
        console.log("-1");
        this.$emit("sub")
      },
      incrementN() {
        this.$emit("addN", this.num)
      },
      submitValue() {
        this.$emit("smt", this.name, this.age)
      }
    }
  }
</script>

<style scoped>

</style>