var mongoose = require('mongoose')

var Statis = new mongoose.Schema({
  date: String,
  origin: String,
  id: Number
})

Statis.index({id: 1})

module.exports = mongoose.model('Statis', Statis)
