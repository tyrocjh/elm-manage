const express = require('express')
const router = express.Router()
const UserInfo = require('../models/userInfo')

router.get('/list', function (req, res) {
  const { limit = 20, offset = 0 } = req.query
  UserInfo
    .find({}, '-_id')
    .sort({user_id: -1})
    .limit(Number(limit))
    .skip(Number(offset))
    .exec(function (err, users) {
      if (err) {
        console.log('获取用户列表数据失败', err)
        res.send({
          status: 0,
          type: 'GET_DATA_ERROR',
          message: '获取用户列表数据失败'
        })
      } else {
        res.json(users)
      }
    })
})

router.get('/count', function (req, res) {
  UserInfo
    .count({})
    .exec(function (err, count) {
      if (err) {
        res.json({
          status: 0,
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

router.get('/city/count', function (req, res) {
  const cityArr = ['北京', '上海', '深圳', '杭州']
  const filterArr = []
  cityArr.forEach(item => {
    filterArr.push(UserInfo.find({city: item}).count())
  })
  filterArr.push(UserInfo.$where('!"北京上海深圳杭州".includes(this.city)').count())
  Promise.all(filterArr).then(result => {
    res.send({
      status: 1,
      user_city: {
        beijing: result[0],
        shanghai: result[1],
        shenzhen: result[2],
        hangzhou: result[3],
        qita: result[4]
      }
    })
  }).catch(err => {
    console.log('获取用户分布城市数据失败', err)
    res.send({
      status: 0,
      type: 'ERROR_GET_USER_CITY',
      message: '获取用户分布城市数据失败'
    })
  })
})

module.exports = router
