const server = require('./config/server')
const mongoose = require('./config/database')


// Importação das rotas
const work = require('./routes/works/work.route')
const workCollection = require('./routes/works/work-collection.route')
const specialCollection = require('./routes/works/special-collection.route')

// Rotas
server.use('/', work)
server.use('/api/v1/work', work)
server.use('/api/v1/work-collection', workCollection)
server.use('/api/v1/special-collection', specialCollection)
