var mongoose = require('mongoose'),
  superagent = require('superagent'),
  Eventproxy = require('eventproxy'),
  jsonfile = require('jsonfile'),
  config = require('../config'),
  UserInfo = require('../models/userInfo')

var ep = new Eventproxy(),
  pageNum = 100,
  pageUrls = [],
  dataArray = [],
  outputFile = 'server/tasks/userList.json'

mongoose.connect(config.database)
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

for (var i = 0; i < pageNum; i++) {
  pageUrls.push('http://cangdu.org:8001/v1/users/list?offset=' + 50 * i + '&limit=50')
}

function createData (M, arr) {
  arr.forEach(function (obj) {
    M.create(obj, function (err, model) {
      if (err) {
        console.info(err)
      }
    })
  })
}

function processData (data) {
  createData(UserInfo, data)
}

function outputData (data) {
  jsonfile.writeFile(outputFile, data, {spaces: 2}, function (err) {
    if (err) {
      console.info(err)
    }
  })
}

function start () {
  ep.after('handleResult', pageNum, function () {
    // outputData(dataArray)
    processData(dataArray)
  })

  pageUrls.forEach(function (pageUrl) {
    superagent.get(pageUrl)
      .end(function (err, res) {
        dataArray = dataArray.concat(res.body)
        ep.emit('handleResult')
      })
  })
}

start()
