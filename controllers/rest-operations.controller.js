exports.create = function (res, Model, data) {
  return new Promise(async function (resolve, reject) {
    let code = 200
    let result = 'Sucesso'
    try {
      await Model.create(data)
    } catch (error) {
      code = 500
      result = 'Erro'
      console.error(error)
    }
    resolve(res.status(code).json({ resultado: result }))
  })
}

exports.findAll = async function (res, Model, parameters, fields) {
  return new Promise(async function (resolve, reject) {
    let code = 200
    let result = []
    try {
      result = await Model.find(parameters).select(fields)
    } catch (error) {
      code = 500
      console.error(error)
    }
    resolve(res.status(code).json({ result: result }))
  })
}
