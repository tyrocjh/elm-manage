<template>
  <div class="navbar">
    <div class="hamburger-container">
      <hamburger></hamburger>
    </div>
    <levelbar></levelbar>
    <tagsbar></tagsbar>
  </div>
</template>

<script>
  import Levelbar from './Levelbar'
  import Tagsbar from './Tagsbar'
  import Hamburger from '@/components/Hamburger'

  export default {
    name: 'navbar',
    components: {Hamburger, Levelbar, Tagsbar}
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    background-color: #eef1f6;

    .hamburger-container {
      display: inline-block;
      position: relative;
      top: 3px;
      margin-left: 10px;
      margin-right: 15px;
    }
  }
</style>
