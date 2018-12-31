const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TextSchema = new Schema({
  page: { type: String, required: true, maxlength: 30 },
  texts: { type: [Object], required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `texts` })


module.exports = mongoose.model('Text', TextSchema)
