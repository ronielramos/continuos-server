const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = Schema.Types.ObjectId

let wordCollectionSchema = new Schema({
  title: { type: String, required: true, maxlength: 30 },
  initial_date: { type: Date, required: true },
  final_date: { type: Date, required: true },
  selectedWriters: { type: [{ _id, name: String, photo: String }], required: true },
  allowed_writer: { type: { _id, name: String, photo: String }, required: true },
  works: { type: [{ _id: _id, position: Number }], required: false },
  topic: { type: { _id: _id, name: String }, required: true },
  admirations: { type: [{ _id: _id, name: String, photo: String }], required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `work-collections` })


module.exports = mongoose.model('WorkCollection', wordCollectionSchema)
