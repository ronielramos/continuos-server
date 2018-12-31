const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = Schema.Types.ObjectId

let LicenseSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  description: { type: String, required: true, maxlength: 2048 },
  creator: { type: { _id: _id, name: String, date: Date }, required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `licenses` })


module.exports = mongoose.model('License', LicenseSchema)
