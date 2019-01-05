const bcrypt = require('bcrypt')

exports.passwordValidation = function (password) {
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

