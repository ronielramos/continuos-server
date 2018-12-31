const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = Schema.Types.ObjectId

let WorkSchema = new Schema({
  title: { type: String, required: true, maxlength: 30 },
  content: { type: String, required: true, maxlength: 4096 },
  creator: { type: { name: String, photo: String, _id: _id }, required: true },
  tags: { type: [{ name: String, _id: _id }], required: false },
  topic: { type: { name: String, _id: _id }, required: true },
  license: { type: { name: String, _id: _id } },
  work_pic: { type: String, require: true, maxlength: 200 },
  admirations: { type: { name: String, photo: String, date: Date, _id: _id } },
  work_collection: { type: { belongs: Boolean, _id: _id, my_position: Number }, required: true },
  isPublic: { type: Boolean, required: true, default: true },
  isActive: { type: Boolean, required: true, default: true },
  creatAt: { type: Date, default: Date.now() }

}, { collection: `works` })


module.exports = mongoose.model('Work', WorkSchema)
