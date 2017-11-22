var mongoose = require('mongoose'),
  superagent = require('superagent'),
  Eventproxy = require('eventproxy'),
  jsonfile = require('jsonfile'),
  config = require('../config'),
  Order = require('../models/order')

var ep = new Eventproxy(),
  pageNum = 50,
  pageUrls = [],
  dataArray = [],
  outputFile = 'server/tasks/orderList.json'

mongoose.connect(config.database)
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?')
})

for (var i = 0; i < pageNum; i++) {
  pageUrls.push('http://cangdu.org:8001/bos/orders?offset=' + 50 * i + '&limit=50')
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
  createData(Order, data)
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
    outputData(dataArray)
    // processData(dataArray)
  })

  pageUrls.forEach(function (pageUrl) {
    superagent.get(pageUrl)
      .end(function (err, res) {
        if (res && res.body) {
          dataArray = dataArray.concat(res.body)
        }
        ep.emit('handleResult')
      })
  })
}

start()
