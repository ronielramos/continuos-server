const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
const should = chai.should()

const serverUrl = 'http://127.0.0.1:8080'

chai.use(chaiHttp);

// Nossa suite de teste relacionada a artigos
describe('Works', () => {

  // No describe podemos passar um texto para identificação 
  describe('/GET work/search', () => {
    it('Testando GET todos os Works', (done) => {
      chai.request(serverUrl) // Endereço do servidor
        .get('/api/v1/work/search/teste') // endpoint que vamos testar
        .end((err, res) => { // testes a serem realizados
          res.should.have.status(200); // verificando se o retorno e um status code 200
          res.body.should.be.a('array'); // Verificando se o retorno e um array
          done();
        });
    });
  })
})
