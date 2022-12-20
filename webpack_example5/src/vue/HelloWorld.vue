<template>
    <h2>Hello World 组件</h2>
    <h2>{{ message }}</h2>
</template>

<script>
    export default {
        data() {
            return {
                message: "子组件"
            }
        }
    }
</script>

<style>
    h2 {
        color: pink
    }
</style>