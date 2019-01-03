const server = require('./config/server')
const passport = require('passport')
require('./config/database')
require('./config/middleware')

// Importação das rotas

const writer = require('./routes/account.route')

const work = require('./routes/works/work.route')
const workCollection = require('./routes/works/work-collection.route')
const specialCollection = require('./routes/works/special-collection.route')


// Rotas
server.use('/api/v1/work', work)
server.use('/api/v1/work-collection', workCollection)
server.use('/api/v1/special-collection', specialCollection)

server.use('/api/v1/writer', writer)
server.use('/api/v1/writer', writer)

server.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({ error: err })
})
