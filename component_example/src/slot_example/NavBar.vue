<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navBar {
  display: flex;
}
.left, .right, .center {
  height: 44px;
}
.left, .right {
  width: 80px;
  background-color: aqua;
}
.center {
  flex: 1;
  background-color: pink;
}
</style>