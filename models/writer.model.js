const Email = require('mongoose-type-email')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _id = Schema.Types.ObjectId

let WriterSchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  email: { type: Email, required: true },
  profile_pic: { type: String, required: false, default: '' },
  password: { type: String, required: false },
  register_type: { type: Number, min: 1, max: 4, required: true },
  notifications: { type: { last_access: Date, data: [{ date: Date, emmiter: String, content: String, read: Boolean }], required: false } },
  topics: { type: [{ _id: _id, name: String }], required: false },
  subscriptions: { type: [{ _id: _id, name: String }], required: false },
  admired_people: { type: [{ _id: _id, name: String, photo: String, createdAt: Date }], required: false },
  admired_me: { type: [{ _id: _id, name: String, photo: String, createdAt: Date }], required: false },
  works: { type: [{ _id: _id, title: String }], required: false },
  admired_works: { type: [{ _id: _id, title: String, createdAt: Date }], required: false },
  blocked_people: { type: [{ _id: _id, name: String, photo: String, createdAt: Date }], required: false },
  blocked_for: { type: [_id], required: false },
  devices: { type: Object, required: false },
  searches: { type: [String], required: false },
  createdAt: { type: Date, required: false, default: Date.now() },
  isActive: { type: Boolean, required: false, default: true }

}, { collection: `writers` })


module.exports = mongoose.model('Writer', WriterSchema)