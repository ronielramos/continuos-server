const mongoose = require('mongoose')

let devDbUrl = 'mongodb://127.0.0.1:27017/continuos'
let mongoDB = process.env.MONGODB_URI || devDbUrl

mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
