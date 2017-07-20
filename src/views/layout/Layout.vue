<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar class="sidebar"></sidebar>
    </div>
    <div class="main-container">
      <navbar></navbar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  import Navbar from './Navbar'
  import AppMain from './AppMain'

  export default {
    components: { Sidebar, Navbar, AppMain }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .sidebar-container {
      position: fixed;
      width: 200px;
      top: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;

      .sidebar {
        overflow-y: scroll;
        margin-right: -18px;
        height: 100%;
      }
    }

    .main-container {
      margin-left: 200px;
      min-height: 500px;

      .app-main {
        padding: 20px;
      }
    }
  }
</style>
