<template>
	<div class="dashboard">
  	<h3>数据统计</h3>
    <section class="data-section">
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="5"><div class="wrap wrap-cur-head">当日数据：</div></el-col>
        <el-col :span="5"><div class="wrap"><span class="data-num">{{apiCountByCurDate}}</span>API请求量</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{userCountByCurDate}}</span>新增用户</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{orderCountByCurDate}}</span>新增订单</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{adminCountByCurDate}}</span>新增管理员</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"><div class="wrap wrap-total-head">总数据：</div></el-col>
        <el-col :span="5"><div class="wrap"><span class="data-num">{{apiTotalCountToFixed}}</span><span v-if="apiTotalCount > 10000">万</span>API请求量</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{userTotalCount}}</span>注册用户</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{orderTotalCount}}</span>订单</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">{{adminTotalCount}}</span>管理员</div></el-col>
      </el-row>
    </section>
    <tendency :sevenDay=sevenDay :sevenDayData=sevenDayData></tendency>
	</div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import moment from 'moment'
  import Tendency from '@/components/graph/tendency'

  export default {
    data: () => {
      return {
        sevenDay: [],
        sevenDayData: [[], [], [], []]
      }
    },
    components: { Tendency },
    computed: {
      ...mapState({
        apiCountByCurDate: ({app}) => app.apiCountByCurDate,
        userCountByCurDate: ({user}) => user.countByCurDate,
        orderCountByCurDate: ({order}) => order.countByCurDate,
        adminCountByCurDate: ({admin}) => admin.countByCurDate,
        apiTotalCount: ({app}) => app.apiTotalCount,
        apiTotalCountToFixed: ({app}) => app.apiTotalCount > 10000 ? (app.apiTotalCount / 10000).toFixed(2) : app.apiTotalCount,
        userTotalCount: ({user}) => user.count,
        adminTotalCount: ({admin}) => admin.count,
        orderTotalCount: ({order}) => order.count
      })
    },
    methods: {
      ...mapActions([
        'getApiCountByCurDate',
        'getUserCountByCurDate',
        'getOrderCountByCurDate',
        'getAdminCountByCurDate',
        'getApiTotalCount',
        'getUserCount',
        'getAdminCount',
        'getOrderCount'
      ]),
      getCurrentData () {
        let curDate = moment().format('YYYY-MM-DD')
        this.getApiCountByCurDate(curDate)
        this.getUserCountByCurDate(curDate)
        this.getOrderCountByCurDate(curDate)
        this.getAdminCountByCurDate(curDate)
        this.getApiTotalCount()
        this.getUserCount()
        this.getAdminCount()
        this.getOrderCount()
      },
      getSevenDayData () {
        for (let i = 0; i < 7; i++) {
          this.sevenDay.push(moment().subtract(i, 'day').format('YYYY-MM-DD'))
        }
        let apiArr = [[], [], [], []]
        this.sevenDay.forEach(curDate => {
          apiArr[0].push(this.getApiCountByCurDate(curDate))
          apiArr[1].push(this.getUserCountByCurDate(curDate))
          apiArr[2].push(this.getOrderCountByCurDate(curDate))
          apiArr[3].push(this.getAdminCountByCurDate(curDate))
        })
        let promiseArr = [...apiArr[0], ...apiArr[1], ...apiArr[2], ...apiArr[3]]
        Promise.all(promiseArr).then(res => {
          let resArr = [[], [], [], []]
          res.forEach((item, idx) => {
            resArr[Math.floor(idx / 7)].push(item.data.count)
          })
          this.sevenDayData = resArr
        })
      }
    },
    created () {
      this.getCurrentData()
      this.getSevenDayData()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    h3 {
      text-align: center;
      font-size: 30px;
      font-style: normal;
      margin-bottom: 10px;
    }

    .data-section {
      text-align: center;
      margin: 20px 0 40px;

      .wrap {
        font-size: 14px;
        color: #666;
        border-radius: 6px;
        background: #e5e9f2;
        padding: 8px 0;

        &.wrap-cur-head {
          font-size: 26px;
          color: #fff;
          background: #ff9800;
        }

        &.wrap-total-head {
          font-size: 26px;
          color: #fff;
          background: #20a0ff;
        }

        .data-num {
          font-size: 26px;
          color: #333;
        }
      }
    }
  }
</style>
