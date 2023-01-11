<template>
    <div>
        <button @click="btnClick"> 点击 </button>
    </div>
</template>

<script>
import emmitter from './utils/eventbus'
    export default {
       methods: {
        btnClick() {
            console.log("按钮点击");
            emmitter.emit("niubi", {name:"张三", age: 23})
        }
       } 
    }
</script>

<style scoped>

</style>  