/* eslint-disable padded-blocks */

exports.create = function (Model, data) {
  return new Promise(async function (resolve, reject) {
    try {
      await Model.create(data)
      const response = { code: 201, description: 'Success' }

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
      const content = await Model.find(parametros).select(fields).skip(skipCount).limit(qtd)
      const response = { code: 200, content: content }

      resolve(response)

    } catch (error) {
      const response = { code: 500 }

      reject(response)
    }
  })
}

exports.findOne = function (Model, _id, fields) {
  return new Promise(async (resolve, reject) => {
    try {
      const content = await Model.findById(_id).select(fields)
      const response = { code: 200, content: content }

      resolve(response)

    } catch (error) {
      const response = { code: 500 }

      reject(response)
    }
  })
}

exports.findMany = function (Model, _ids, fields) {
  return new Promise(async (resolve, reject) => {
    try {
      const content = await Model.find({ _id: { $in: _ids } }).select(fields)
      const response = { code: 200, content: content }

      resolve(response)

    } catch (error) {
      const response = { code: 500 }

      reject(response)
    }
  })
}


exports.search = function (Model, data, fields, page, qtd) {
  return new Promise(async (resolve, reject) => {
    try {
      const skipCount = (page - 1) * qtd
      const value = '.*' + data.value + '.*'
      const regex = { [data.field]: { $regex: value, $options: 'i' } }
      const content = await Model.find(regex).select(fields).limit(qtd).skip(skipCount)
      const response = { code: 200, content: content }

      resolve(response)

    } catch (error) {
      const response = { code: 500 }

      reject(response)
    }
  })
}

exports.alter = function (Model, data, update) {
  return new Promise(async (resolve, reject) => {
    try {
      const content = await Model.updateOne(data, update)
      const response = { code: 200, content: content }

      resolve(response)

    } catch (error) {
      const response = { code: 500 }
      console.error(error)
      reject(response)
    }
  })
}
