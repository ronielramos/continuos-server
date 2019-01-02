const Text = require('../models/text.model')
const Rest = require('./rest-operations.controller')

exports.create = async function (req, res) {
  Rest.create(res, Text, req.body)
}


exports.alter = async function (req, res) {
  res.end()
}

exports.deleteOne = async function (req, res) {
  res.end()
}

exports.findOne = async function (req, res) {
  res.end()
}

exports.findList = async function (req, res) {
  res.end()
}

exports.search = async function (req, res) {
  res.end()
}
