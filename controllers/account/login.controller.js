const Writer = require('../../models/writer.model')

const jwt = require('jsonwebtoken')
const passport = require('passport')

// const Rest = require('../rest-operations.controller')

// exports.forgot = async function (req, res) {
//   res.end()
// }

exports.login = async function (req, res, next) {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('Error!')
        console.error(error)
        return next(error)
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)
        const body = { _id: user._id, email: user.email }
        const token = jwt.sign({ user: body }, 'nivelArrozTop')
        return res.json({ token })
      })
    } catch (error) {
      console.error(error)
      return next(error)
    }
  })(req, res, next)
}


exports.find = async function (req, res) {
  try {
    const user = req.user
    const fields = req.query.fields || 'name email profile_pic'
    const fieldsSplited = fields.split(' ')

    const forbiddenFeld = fieldRestrictor(fieldsSplited)

    if (forbiddenFeld) return res.status(400).json({ description: forbiddenFeld + ' is forbidden or not exists' })

    const writer = await Writer.findById(user._id).select(fields)
    res.json(writer)
  } catch (error) {
    return res.status(400).end()
  }
}


function fieldRestrictor (fieldsReceived) {
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
  for (let field of fieldsReceived) {
    if (!blockedFields.includes(field)) return field
  }
  return null
}


exports.forgotPassword = function (req, res) {
  res.end()
}
exports.change = function (req, res) {
  res.end()
}
