/* eslint-disable handle-callback-err */
/* eslint-disable no-unused-expressions */

const chai = require('chai')
const nock = require('nock')
const chaiHttp = require('chai-http')

const expect = chai.expect
const should = chai.should()

const server = 'http://127.0.0.1:8080/api/v1'

chai.use(chaiHttp)

const endpoint = '/writer'

describe('LOGIN', function () {
  // beforeEach(() => {
  //   nock(server)
  //     .post(endpoint)
  //     .reply(201)
  // })

  it('Should validate the account and generate TOKEN to access the app on /writer/login POST')
  it('Should validate the account and generate a TOKEN to validate the change of password on /writer/forgot POST')
  it('Should validate the token and release Writer to change the password on /writer/change POST')
})
