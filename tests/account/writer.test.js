/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-expressions */

const chai = require('chai')
const nock = require('nock')
const chaiHttp = require('chai-http')
const expect = chai.expect
const should = chai.should()
const server = 'http://127.0.0.1:8080/api/v1'
const endpoint = '/writer'

chai.use(chaiHttp)

describe('Writer', function () {
  beforeEach(() => {
    nock(server)
      .intercept(endpoint, 'POST')
      .reply(201, 'ok')
  })
  it('Should add a SINGLE Writer on /writer POST', function (done) {
    chai.request(server)
      .post(endpoint)
      .type('form')
      .send({
        name: 'teste',
        email: 'roniel.ramos.rr@gmail.com',
        password: '@r123456L',
        register_type: 1
      })
      .end(function (err, res) {
        res.should.have.status(201)
        console.error(err)
        done()
      })
  })
  it('Should alter a SINGLE Writer on /writer/:_id PATCH')
  it('Should delete a SINGLE Writer on /writer/:_id DELETE')
})
it('Should get all Writers on /writer GET', function (done) {
  chai.request(server)
    .get(endpoint + '/1')
    .end(function (err, res) {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      console.error(err)
      done()
    })
})


it('Should get a UNIQUE Writer on /writer/:_id GET')
it('Should get a MANY Writers on /writer/many/:_ids GET')
it('Should get a Writers WITH the CONDITIONS passed on /writer/search/:value GET')

it('Should validate the account and generate TOKEN to access the app on /writer/login POST')
it('Should validate the account and generate a TOKEN to validate the change of password on /writer/forgot POST')
it('Should validate the token and release Writer to change the password on /writer/change POST')

