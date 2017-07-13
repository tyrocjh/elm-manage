<template>
  <div class="tagsbar">
    <el-tag style="margin-right: 8px" v-for="tag in tags" :key="tag.name" :closable="true" :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    name: 'tagsbar',
    data () {
      return {
        tags: [
          { name: '标签一' },
          { name: '标签二' }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tagsbar {
    display: inline-block;
    margin-left: 20px;
    position: relative;
    top: -3px;
  }
</style>
