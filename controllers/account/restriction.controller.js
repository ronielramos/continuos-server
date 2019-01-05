exports.fieldRestrictor = function (fieldsReceived) {
  return new Promise((resolve) => {
    const blockedFields = [
      'name',
      'email',
      'profile_pic',
      'notifications',
      'topics',
      'subscriptions',
      'admired_people',
      'admired_me',
      'works',
      'admired_works',
      'blocked_people',
      'devices',
      'searches',
      'createdAt',
      'isActive'
    ]
    for (let index in fieldsReceived) {
      if (!blockedFields.includes(fieldsReceived[index])) return resolve(fieldsReceived[index])
    }
    return resolve(null)
  })
}


exports.fieldValidator = function (field) {
  return new Promise(async (resolve, reject) => {
    if (field === 'password') return resolve()
    const error = { description: field + ' is forbidden or not exists' }
    return reject(error)
  })
}

exports.operationValidator = function (operation, data, field) {
  return new Promise(async (resolve, reject) => {
    let update = {}

    if (operation === 'addToSet' || operation === 'pull') {
      update = { [`$${operation}`]: { [field]: data[field] } }
    } else if (operation === 'set') {
      update = { [`$${operation}`]: data }
    } else {
      const error = { description: 'Operation ' + operation + ' is forbidden or not exists' }
      reject(error)
    }
    resolve(update)
  })
}
