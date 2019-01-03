/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-expressions */

const chai = require('chai')
const nock = require('nock')
const chaiHttp = require('chai-http')

const expect = chai.expect
const should = chai.should()

const server = 'http://127.0.0.1:8080/api/v1'
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjMmQzNzQ4ZGRlYTg4M2FjZjU0NTAwNiIsImVtYWlsIjoicm9uaWVsX3JhbW9zNkBob3RtYWlsLmNvbSJ9LCJpYXQiOjE1NDY0Njg1MDB9.Kz8JKy3ls7xtqMNK6c0ldLt-DhNgC1kkc6iBDVC0hL4'

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
        email: 'roniel_ramos6@hotmail.com',
        password: '@1254ronieL',
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
  it('Should validate the account and generate a TOKEN to validate the change of password on /writer/forgot POST')
  it('Should validate the token and release Writer to change the password on /writer/change POST')
  it('Should return the register data of the Writer /writer/login/data GET', function (done) {
    chai.request(server)
      .get(endpoint + '/data')
      .set('Authorization', token)
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('profile_pic')
        res.body.profile_pic.should.be.a('string')
        res.body.should.have.property('createdAt')
        res.body.createdAt.should.be.a('string')
        res.body.should.have.property('isActive')
        res.body.isActive.should.be.true
        res.body.should.have.property('name')
        res.body.name.should.be.a('string')
        res.body.should.have.property('email')
        res.body.email.should.be.a('string')
        res.body.should.have.property('register_type')
        res.body.register_type.should.be.a('number')
        done()
      })
  })
})
