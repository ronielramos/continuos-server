const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = Schema.Types.ObjectId

let SpecialCollectionSchema = new Schema({
  title: { type: String, required: true, maxlength: 30 },
  initial_date: { type: Date, required: true },
  final_date: { type: Date, required: true },
  work_collections: { type: { _id: _id, title: String }, required: true },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `special-collections` })


module.exports = mongoose.model('SpecialCollection', SpecialCollectionSchema)
