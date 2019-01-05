const Writer = require('../models/writer.model')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const bcrypt = require('bcrypt')

const localStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    // if (token) console.log('Token', token)
    const writer = await Writer.findOne({ email }).select('name password email')

    if (!writer) {
      return done(null, false, { message: 'User not found' })
    }
    const validate = await bcrypt.compare(password, writer.password)

    if (!validate) {
      return done(null, false, { message: 'Wrong Password' })
    }

    // Send the user information to the next middleware
    return done(null, writer, { message: 'Logged in Successfully' })
  } catch (error) {
    return done(error)
  }
})

const jwtStrategy = new JWTstrategy({
  secretOrKey: 'nivelArrozTop',
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  expiresIn: 86400 // One day
}, async (token, done) => {
  try {
    return done(null, token.user)
  } catch (error) {
    done(error)
  }
})

passport.use('login', localStrategy)
passport.use(jwtStrategy)
