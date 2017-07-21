<template>
  <div class="navbar">
    <div class="hamburger-container">
      <hamburger></hamburger>
    </div>
    <levelbar></levelbar>
    <tagsbar></tagsbar>
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
  import Tagsbar from './Tagsbar'
  import Hamburger from '@/components/Hamburger'

  export default {
    data () {
      return {
        baseImgPath
      }
    },
    components: { Hamburger, Levelbar, Tagsbar },
    computed: {
      ...mapState({
        adminInfo: ({admin}) => admin.info
      })
    },
    methods: {
      ...mapActions([
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
