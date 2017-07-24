<template>
  <div class="app-wrapper" :class="{'hide-sidebar':!sidebar.opened}">
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
  import { mapState } from 'vuex'
  import Sidebar from './Sidebar'
  import Navbar from './Navbar'
  import AppMain from './AppMain'

  export default {
    components: { Sidebar, Navbar, AppMain },
    computed: {
      ...mapState({
        sidebar: ({app}) => app.sidebar
      })
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    &.hide-sidebar {
      .sidebar-container {
        transform: translate(-166px);

        .sidebar {
          transform: translate(156px);
        }

        &:hover {
          transform: translate(0);

          .sidebar {
            transform: translate(0);
          }
        }
      }

      .main-container {
        margin-left: 34px;
      }
    }

    .sidebar-container {
      transition: all .28s ease-out;
      position: fixed;
      width: 200px;
      top: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;

      .sidebar {
        transition: all .28s ease-out;
        overflow-y: scroll;
        margin-right: -18px;
        height: 100%;
      }
    }

    .main-container {
      transition: all .28s ease-out;
      margin-left: 200px;
      min-height: 500px;

      .app-main {
        padding: 20px;
      }
    }
  }
</style>
