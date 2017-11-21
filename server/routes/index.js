module.exports = function (app, config) {
  app.use('/v1/user', require('./user'))
  app.use('/v1/users', require('./user'))
  app.use('/bos/orders', require('./order'))
  app.use('/statis', require('./statis'))
}
