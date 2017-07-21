<template>
  <div class="admin-list">
    <el-table
      v-loading.body="isFetching"
      :data="adminList"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册日期">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="admin"
        label="权限">
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
        adminList: ({admin}) => admin.list,
        count: ({admin}) => admin.count,
        currentPage: ({admin}) => admin.currentPage,
        offset: ({admin}) => admin.offset,
        limit: ({admin}) => admin.limit,
        isFetching: ({admin}) => admin.isFetching
      })
    },
    methods: {
      ...mapActions([
        'getAdminList',
        'getAdminCount',
        'currentChange'
      ]),
      initData () {
        this.getAdmins()
      },
      getAdmins () {
        this.getAdminList({
          offset: this.offset,
          limit: this.limit
        }).then(() => {
          this.getCount()
        }).catch((err) => {
          console.log(err)
        })
      },
      getCount () {
        this.getAdminCount()
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.currentChange(val)
        this.getAdmins()
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
