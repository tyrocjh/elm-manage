/* eslint-disable no-eval */
const express = require('express')
const router = express.Router()
const UserInfo = require('../models/userInfo')
const Statis = require('../models/statis')
const Order = require('../models/order')

router.get('/api/count', function (req, res) {
  Statis
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 'fail',
          msg: '获取所有API请求次数失败！'
        })
      } else {
        res.json({
          status: 1,
          count
        })
      }
    })
})

router.get('/api/:date/count', function (req, res) {
  const date = req.params.date
  Statis
    .find({date})
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 'fail',
          msg: '获取当天API请求次数失败！'
        })
      } else {
        res.json({
          status: 1,
          count
        })
      }
    })
})

router.get('/user/:date/count', function (req, res) {
  const date = req.params.date
  UserInfo
    .find({registe_time: eval('/^' + date + '/gi')})
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 'fail',
          msg: '查询失败！'
        })
      } else {
        res.json({
          status: 1,
          count
        })
      }
    })
})

router.get('/order/:date/count', function (req, res) {
  const date = req.params.date
  Order
    .find({formatted_created_at: eval('/^' + date + '/gi')})
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 'fail',
          msg: '获取当天订单数量失败！'
        })
      } else {
        res.json({
          status: 1,
          count
        })
      }
    })
})

module.exports = router
