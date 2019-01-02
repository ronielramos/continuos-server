
exports.create = function (Model, data) {
  return new Promise(async function (resolve, reject) {
    try {
      await Model.create(data)
      const response = { code: 201 }
      resolve(response)
    } catch (error) {
      const response = { code: 500 }
      reject(response)
    }
  })
}



exports.find = async function (Model, fields, page, qtd, parametros) {
  return new Promise(async function (resolve, reject) {
    try {
      const skipCount = (page - 1) * qtd
      const content = await Model.find(parametros).select(fields).skip(skipCount)
      const response = { code: 200, content: content }
      resolve(response)
    } catch (error) {
      const response = { code: 500 }
      reject(response)
    }
  })
}
