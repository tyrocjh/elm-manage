<template>
  <div class="user-list">
    <el-table
      v-loading.body="isFetching"
      :data="userList"
      style="width: 100%">
      <el-table-column
        type="index"
        width="100">
      </el-table-column>
      <el-table-column
        prop="registe_time"
        label="注册日期">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名">
      </el-table-column>
      <el-table-column
        prop="city"
        label="注册地址">
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({
        userList: ({user}) => user.list,
        count: ({user}) => user.count,
        currentPage: ({user}) => user.currentPage,
        offset: ({user}) => user.offset,
        limit: ({user}) => user.limit,
        isFetching: ({user}) => user.isFetching
      })
    },
    methods: {
      ...mapActions([
        'getUserList',
        'getUserCount',
        'currentChange'
      ]),
      initData () {
        this.getUsers()
      },
      getUsers () {
        this.getUserList({
          offset: this.offset,
          limit: this.limit
        }).then(() => {
          this.getCount()
        }).catch((err) => {
          console.log(err)
        })
      },
      getCount () {
        this.getUserCount()
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.currentChange(val)
        this.getUsers()
      }
    },
    created () {
      this.initData()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .pagination-container {
    margin-top: 20px;
  }
</style>
