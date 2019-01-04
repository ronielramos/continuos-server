/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-expressions */

const chai = require('chai')
const nock = require('nock')
const chaiHttp = require('chai-http')

const expect = chai.expect
const should = chai.should()

const data = require('../data.test')
const server = data.server
const token = data.token
const email = data.email
const password = data.password

chai.use(chaiHttp)

const endpoint = '/writer/login'

describe('LOGIN', function () {
  // beforeEach(() => {
  //   nock(server)
  //     .post(endpoint)
  //     .reply(201)
  // })

  it('Should validate the account and generate TOKEN to access the app on /writer/login POST', function (done) {
    chai.request(server)
      .post(endpoint)
      .type('form')
      .send({
        email: email,
        password: password,
        register_type: 1
      })
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('token')
        res.body.token.should.be.a('string')
        done()
      })
  })


  it('Should validate the account and generate a TOKEN to validate the change of password on /writer/login/forgot PATCH', function (done) {
    chai.request(server)
      .patch(endpoint + '/forgot')
      .send({
        email: email
      })
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        done()
      })
  })


  it('Should validate the token and release Writer to change the password on /writer/login PATCH', function (done) {
    chai.request(server)
      .patch(endpoint)
      .send({
        email: email,
        token: 'token'
      })
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        done()
      })
  })


  it('Should return the register data of the Writer /writer/login/data GET', function (done) {
    chai.request(server)
      .get(endpoint + '/data')
      .set('Authorization', token)
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        done()
      })
  })
})
