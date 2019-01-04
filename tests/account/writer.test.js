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
const _id = data._id
const _ids = data._ids
const value = data.value

const endpoint = '/writer'

chai.use(chaiHttp)

describe('Writer', function () {
  beforeEach(() => {
    nock(server)
      .intercept(endpoint, 'POST')
      .reply(201, { description: 'Success' })
  })


  it('Should add a SINGLE Writer on /writer POST', function (done) {
    chai.request(server)
      .post(endpoint)
      .type('form')
      .send({
        name: 'teste',
        email: email,
        password: password,
        register_type: 1
      })
      .end(function (err, res) {
        res.should.have.status(201)
        res.should.be.json
        res.should.be.a('object')
        console.error(err)
        done()
      })
  })


  it('Should alter a SINGLE Writer Password on /writer PATCH', function (done) {
    chai.request(server)
      .patch(endpoint)
      .set('Authorization', token)
      .type('form')
      .send({
        last_password: password,
        new_password: password
      })
      .end(function (err, res) {
        console.error(err)
        res.should.have.status(200)
        res.should.be.json
        res.should.be.a('object')
        done()
      })
  })


  it('Should delete a SINGLE Writer on /writer DELETE', function (done) {
    chai.request(server)
      .delete(endpoint)
      .set('Authorization', token)
      .end(function (err, res) {
        console.error(err)
        res.sould.have.status(200)
        res.should.be.json
        res.should.be.a('object')
      })
  })
})


it('Should get all Writers on /writer/:page GET', function (done) {
  chai.request(server)
    .get(endpoint + '/1')
    .end(function (err, res) {
      console.error(err)
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      done()
    })
})


it('Should get a UNIQUE Writer on /writer/:_id GET', function (done) {
  chai.request(server)
    .get(endpoint + '/_id/' + _id)
    .end(function (err, res) {
      console.error(err)
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('object')
      done()
    })
})


it('Should get a MANY Writers on /writer/many/:_ids GET', function (done) {
  chai.request(server)
    .get(endpoint + '/_id/' + _ids)
    .end(function (err, res) {
      console.error(err)
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      done()
    })
})

it('Should get a Writers WITH the CONDITIONS passed on /writer/search/:value GET', function (done) {
  chai.request(server)
    .get(endpoint + '/search/' + value)
    .end(function (err, res) {
      console.error(err)
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      done()
    })
})
