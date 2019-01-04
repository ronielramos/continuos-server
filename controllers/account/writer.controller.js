const Writer = require('../../models/writer.model')
const Rest = require('../rest-operations.controller')

const bcrypt = require('bcrypt')

exports.create = async function (req, res) {
  try {
    let data = req.body
    if (data.register_type === 1) {
      const validPassword = await validarSenha(data.password)
      data.password = validPassword
    }

    Rest.create(Writer, data)
      .then((success) => { return res.status(success.code).json(success.description) })
      .catch((error) => { return res.status(error.code).send() })
  } catch (error) {
    if (error.status) return res.status(error.status).json(error.description)
    console.error(error)
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

function validarSenha (password) {
  return new Promise(async (resolve, reject) => {
    const saltRounds = 10

    if (!password) {
      const response = { code: 400, description: 'Password é obrigatório' }
      reject(response)
    }

    const tamanhoSenha = password.length

    if (tamanhoSenha < 6 || tamanhoSenha > 12) {
      const response = { code: 400, description: 'Password deve conter no mínimo 6 e no máximo 12 digítos' }
      reject(response)
    }

    const letraMinuscula = password.match(/[a-z]{1}/)
    const letraMaiuscula = password.match(/[A-Z]{1}/)
    const numero = password.match(/[0-9]{1}/)
    const caracter = password.match(/[!@#$%*()_+^&}{:;?.]{1}/)

    if (!letraMinuscula || !letraMaiuscula || !numero || !caracter) {
      const response = { code: 400, description: 'Password deve conter ao menos uma letra maiúscula, minúscula, um número e um caracter especial' }
      reject(response)
    }

    const salt = await bcrypt.genSalt(saltRounds)
    password = await bcrypt.hash(password, salt)

    resolve(password)
  })
}
