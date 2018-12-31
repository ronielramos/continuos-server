const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TopicSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  used: { type: [Date], required: false },
  selected: { type: [Date], required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `topics` })


module.exports = mongoose.model('Topic', TopicSchema)
