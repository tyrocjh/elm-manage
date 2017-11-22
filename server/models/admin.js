var mongoose = require('mongoose')

var Admin = new mongoose.Schema({
  user_name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: {type: String, default: '管理员'},
  status: Number,  // 1:普通管理、 2:超级管理员
  avatar: {type: String, default: 'default.jpg'},
  city: String
})

Admin.index({id: 1})

module.exports = mongoose.model('Admin', Admin)
