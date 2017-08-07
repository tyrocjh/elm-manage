<template>
  <div class="order-list">
    <el-table
      v-loading.body="isFetching"
      :data="orderList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="订单ID">
      </el-table-column>
      <el-table-column
        prop="total_amount"
        label="总价格">
      </el-table-column>
      <el-table-column
        prop="status_bar.title"
        label="订单状态">
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
        orderList: ({order}) => order.list,
        count: ({order}) => order.count,
        currentPage: ({order}) => order.currentPage,
        offset: ({order}) => order.offset,
        limit: ({order}) => order.limit,
        isFetching: ({order}) => order.isFetching
      })
    },
    methods: {
      ...mapActions([
        'getOrderList',
        'getOrderCount',
        'currentChange'
      ]),
      initData () {
        this.getOrders()
      },
      getOrders () {
        this.getOrderList({
          offset: this.offset,
          limit: this.limit
        }).then(() => {
          this.getCount()
        }).catch((err) => {
          console.log(err)
        })
      },
      getCount () {
        this.getOrderCount()
      },
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        this.currentChange(val)
        this.getOrders()
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
