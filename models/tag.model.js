const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TagSchema = new Schema({
  name: { type: String, required: true, maxlength: 20 },
  searched: { type: [Date], required: false },
  used: { type: [Date], required: false },
  admired: { type: [Date], required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `tags` })


module.exports = mongoose.model('Tag', TagSchema)
