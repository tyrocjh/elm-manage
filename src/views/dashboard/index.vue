<template>
	<div class="dashboard">
  	<h3>数据统计</h3>
    <section class="data-section">
      <el-row :gutter="20" style="margin-bottom: 10px;">
        <el-col :span="5"><div class="wrap wrap-cur-head">当日数据：</div></el-col>
        <el-col :span="5"><div class="wrap"><span class="data-num">{{apiCount}}</span>API请求量</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">33</span>新增用户</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">44</span>新增订单</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">555</span>新增管理员</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"><div class="wrap wrap-total-head">总数据：</div></el-col>
        <el-col :span="5"><div class="wrap"><span class="data-num">22</span>API请求量</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">33</span>注册用户</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">44</span>订单</div></el-col>
        <el-col :span="4"><div class="wrap"><span class="data-num">555</span>管理员</div></el-col>
      </el-row>
    </section>
	</div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import moment from 'moment'

  export default {
    computed: {
      ...mapState({
        apiCount: ({app}) => app.apiCount
      })
    },
    methods: {
      ...mapActions([
        'getApiCount'
      ]),
      getCurrentData () {
        let curDate = moment().format('YYYY-MM-DD')
        this.getApiCount(curDate)
      }
    },
    created () {
      this.getCurrentData()
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
