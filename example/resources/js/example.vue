<template>
  <div class="hello-vue">
    <h1 class="heading" :class="$style.red">Hello from Vue.</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello-vue'
  }
</script>

<style>
  .hello-vue {
    color: green;
  }
</style>

<style lang="scss">
  .vue-scss {
    color: green;
  }
</style>

<style scoped>
  .heading {
    color: green;
  }
</style>

<style module>
  .red {
    color: red;
  }
</style>
