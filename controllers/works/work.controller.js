const Work = require('../../models/work.model')
const Rest = require('../rest-operations.controller')

const fields = ''

exports.create = async function (req, res) {
  Rest.create(Work, req.body)
    .then((result) => { res.status(result.code).end() })
    .catch((error, errorMessage) => { res.status(error.code).json(errorMessage) })
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

exports.find = async function (req, res) {
  res.end()
}

exports.search = async function (req, res) {
  res.end()
}
