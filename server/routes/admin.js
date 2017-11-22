const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')

router.get('/singout', function (req, res) {
  try {
    delete req.session.admin_id
    res.json({
      status: 1,
      success: '退出成功'
    })
  } catch (err) {
    res.json({
      status: 0,
      message: '退出失败'
    })
  }
})

router.get('/info', function (req, res) {
  const adminId = req.session.admin_id
  if (!adminId || !Number(adminId)) {
    console.log('获取管理员信息的session失效')
    res.json({
      status: 0,
      message: '获取管理员信息失败'
    })
    return
  }
  Admin
    .findOne({id: adminId}, '-_id -__v -password')
    .exec(function (err, info) {
      if (err) {
        res.json({
          status: 0,
          msg: '获取管理员信息失败！'
        })
      } else {
        res.json({
          status: 1,
          data: info
        })
      }
    })
})

router.get('/count', function (req, res) {
  Admin
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 0,
          msg: '获取管理员数量失败！'
        })
      } else {
        res.json({
          status: 1,
          count
        })
      }
    })
})

router.get('/all', function (req, res) {
  const {limit = 20, offset = 0} = req.query
  Admin
    .find({}, '-_id -password')
    .sort({id: -1})
    .skip(Number(offset))
    .limit(Number(limit))
    .exec(function (err, admin) {
      if (err) {
        res.json({
          status: 0,
          msg: '获取超级管理列表失败！'
        })
      } else {
        res.json({
          status: 1,
          data: admin
        })
      }
    })
})

module.exports = router
