const WorkCollection = require('../../models/work-collection.model')
const Rest = require('../rest-operations.controller')

const fields = ''

exports.create = async function (req, res) {
  Rest.create(res, WorkCollection, req.body)
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