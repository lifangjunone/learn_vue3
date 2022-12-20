<template>
    <h2>我是Vue渲染出来的</h2>
    <h2>{{ title }}</h2>
    <hello-world></hello-world>
</template>

<script>
    import HelloWorld from "./HelloWorld.vue" 
    export default {
        components: {
            HelloWorld:HelloWorld  
        },
        data() {
            return {
                title: "Vue title",
            }
        },
    }
</script>

<style scoped>
    h2 {
        color: green
    }
</style>