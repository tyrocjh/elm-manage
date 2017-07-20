<template>
  <div class="levelbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item">
        <router-link :to="item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        levelList: []
      }
    },
    created () {
      this.getLevelList()
    },
    methods: {
      getLevelList () {
        let matched = this.$route.matched.filter((item) => item.name)
        let topLevel = matched[0]
        if (topLevel && topLevel.name !== '首页' && topLevel.path !== '') {
          matched.unshift({name: '首页', path: '/'})
        }
        this.levelList = matched
      }
    },
    watch: {
      $route () {
        this.getLevelList()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .levelbar {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
  }
</style>
