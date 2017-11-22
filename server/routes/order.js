/* eslint-disable camelcase */
const express = require('express')
const router = express.Router()
const Order = require('../models/order')

router.get('/', function (req, res) {
  const {restaurant_id, limit = 20, offset = 0} = req.query
  let filter = {}
  if (restaurant_id && Number(restaurant_id)) {
    filter = {restaurant_id}
  }
  Order
    .find(filter)
    .sort({id: -1})
    .limit(Number(limit))
    .skip(Number(offset))
    .exec(function (err, orders) {
      if (err) {
        res.json({
          status: 0,
          msg: '获取订单数据失败！'
        })
      } else {
        const timeNow = new Date().getTime()
        orders.map(item => {
          if (timeNow - item.order_time < 900000) {
            item.status_bar.title = '等待支付'
          } else {
            item.status_bar.title = '支付超时'
          }
          item.time_pass = Math.ceil((timeNow - item.order_time)/1000)
          item.save()
          return item
        })
        res.json(orders)
      }
    })
})

router.get('/count', function (req, res) {
  const restaurant_id = req.query.restaurant_id
  let filter = {}
  if (restaurant_id && Number(restaurant_id)) {
    filter = {restaurant_id}
  }
  Order
    .find(filter)
    .count()
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 0,
          msg: '获取订单数量失败！'
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
