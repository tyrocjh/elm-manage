<template>
  <div class="navbar">
    <div class="hamburger-container">
      <hamburger :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    </div>
    <levelbar></levelbar>
    <div class="screenfull-container">
      <screenfull></screenfull>
    </div>
    <el-dropdown @command="handleCommand" menu-align="start" class="avatar-container">
      <img :src="adminInfo ? baseImgPath + adminInfo.avatar : ''" class="avatar" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { baseImgPath } from '@/config/env'
  import Levelbar from './Levelbar'
  import Hamburger from '@/components/hamburger'
  import Screenfull from '@/components/screenfull'

  export default {
    data () {
      return {
        baseImgPath
      }
    },
    components: { Hamburger, Levelbar, Screenfull },
    computed: {
      ...mapState({
        sidebar: ({app}) => app.sidebar,
        adminInfo: ({admin}) => admin.info
      })
    },
    methods: {
      ...mapActions([
        'toggleSideBar',
        'getAdminInfo',
        'signout'
      ]),
      handleCommand (command) {
        if (command === 'home') {
          this.$router.push('/')
        } else if (command === 'signout') {
          this.signout().then(res => {
            if (res.data.status === 1) {
              this.$router.push('/login')
            } else {
              this.$message({
                message: res.message,
                type: 'error'
              })
            }
          }).catch(err => {
            this.$message({
              message: err,
              type: 'error'
            })
          })
        }
      },
      toggleClick () {
        this.toggleSideBar()
      }
    },
    created () {
      this.getAdminInfo()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    position: relative;
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

    .screenfull-container {
      position: absolute;
      top: 4px;
      right: 100px;
    }

    .avatar-container {
      position: absolute;
      top: 8px;
      right: 40px;
      .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
  }
  .el-dropdown-menu {
    text-align: center;
    margin-top: -10px;
  }
</style>
