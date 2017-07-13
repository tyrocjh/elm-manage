<template>
  <div class="levelbar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>组件</el-breadcrumb-item>
      <el-breadcrumb-item>介绍</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'levelbar'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .levelbar {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
  }
</style>
