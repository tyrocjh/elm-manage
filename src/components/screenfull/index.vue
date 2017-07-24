<template>
  <i class="fa fa-arrows-alt" aria-hidden="true" @click="toggleScreenfull"></i>
</template>

<script>
  import screenfull from 'screenfull'
  export default {
    methods: {
      toggleScreenfull () {
        if (!screenfull.enabled) {
          this.$message({
            message: 'your browser not support screen full',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .fa-arrows-alt {
    cursor: pointer;
    font-size: 23px;
    color: #48576A;
  }
</style>
