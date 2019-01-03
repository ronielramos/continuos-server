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
        const error = new Error('Erro!')
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
    const writer = await Writer.findById(user._id).select('profile_pic createdAt isActive -_id name email register_type')
    res.status(200).json(writer)
  } catch (error) {
    return res.status(400).end()
  }
}
