const Writer = require('../../models/writer.model')
const Rest = require('../rest-operations.controller')
const passwordController = require('./password.controller')
const restrictionController = require('./restriction.controller')


exports.create = async function (req, res) {
  try {
    let data = req.body

    if (data.register_type === 1) {
      const validPassword = await passwordController.passwordValidation(data.password)
      data.password = validPassword
    }

    Rest.create(Writer, data)
      .then((success) => { return res.status(success.code).json(success.description) })
      .catch((error) => { return res.status(error.code).send() })
  } catch (error) {
    if (error.status) return res.status(error.status).json(error.description)

    return res.status(400).end()
  }
}

exports.find = async function (req, res) {
  const fields = 'name email profile_pic'
  const page = req.params.page || 1
  const qtd = 20
  const parametros = req.query || {}

  Rest.find(Writer, fields, parseInt(page), qtd, parametros)
    .then((success) => { return res.status(success.code).json(success.content) })
    .catch((error) => { return res.status(error.code).send() })
}

exports.alter = async function (req, res) {
  try {
    const _id = req.user._id
    const parameters = { _id: _id }
    const operation = req.body.operation
    const field = Object.keys(req.body.data)[0]

    let data = req.body.data

    if (operation === 'set') {
      await restrictionController.fieldValidator(field)
      data.password = await passwordController.passwordValidation(data.password)
    } else {
      const forbiddenField = await restrictionController.fieldRestrictor([field])
      const error = { description: field + ' is forbidden or not exists' }
      if (forbiddenField) throw error
    }

    const update = await restrictionController.operationValidator(operation, data, field)

    Rest.alter(Writer, parameters, update)
      .then((success) => { return res.status(success.code).json(success.content) })
      .catch((error) => { return res.status(error.code).send() })
  } catch (error) {
    const code = error.code || 400
    const content = error.description || error
    return res.status(code).json(content)
  }
}

exports.deleteOne = async function (req, res) {
  res.end()
}

exports.findOne = async function (req, res) {
  const _id = req.params._id || ''
  const fields = req.query.fields || 'name'
  const fieldsSplited = fields.split(' ')
  const forbiddenFeld = await restrictionController.fieldRestrictor(fieldsSplited)

  if (forbiddenFeld) return res.status(400).json({ description: forbiddenFeld + ' is forbidden or not exists' })

  Rest.findOne(Writer, _id, fields)
    .then((success) => { return res.status(success.code).json(success.content) })
    .catch((error) => { return res.status(error.code).send() })
}


exports.findList = async function (req, res) {
  let _ids = req.params._ids || []

  _ids = _ids.split('-')

  const fields = req.query.fields || 'name'
  const fieldsSplited = fields.split(' ')
  const forbiddenFeld = await restrictionController.fieldRestrictor(fieldsSplited)

  if (forbiddenFeld) return res.status(400).json({ description: forbiddenFeld + ' is forbidden or not exists' })

  Rest.findMany(Writer, _ids, fields)
    .then((success) => { return res.status(success.code).json(success.content) })
    .catch((error) => { return res.status(error.code).send() })
}

exports.search = async function (req, res) {
  let data = {}

  data['value'] = req.params.value || ''
  data['field'] = 'name'

  const page = req.params.page || 1
  const qtd = 20
  const fields = req.query.fields || 'name'
  const fieldsSplited = fields.split(' ')
  const forbiddenFeld = await restrictionController.fieldRestrictor(fieldsSplited)

  if (forbiddenFeld) return res.status(400).json({ description: forbiddenFeld + ' is forbidden or not exists' })

  Rest.search(Writer, data, fields, page, qtd)
    .then((success) => { return res.status(success.code).json(success.content) })
    .catch((error) => { return res.status(error.code).send() })
}

