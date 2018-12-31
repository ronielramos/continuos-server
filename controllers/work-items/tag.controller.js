import Tag from '../../models/tag.model'
import Rest from '../rest-operations.controller'

const fields = ''

exports.create = async function (req, res) {
  Rest.create(res, Tag, req.body)
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