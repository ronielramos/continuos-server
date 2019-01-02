const express = require('express')
const router = express.Router()
const writerController = require('../controllers/account/writer.controller')
const loginController = require('../controllers/account/login.controller')

// Não precisa estar logado
router.post('/login', loginController.login)
router.post('/forgot', loginController.forgot)

router.post('/', writerController.create)

router.get('/:page', writerController.find)
router.get('/_id/:_id', writerController.findOne)
router.get('/many/:_ids', writerController.findList)
router.get('/search/:value', writerController.search)

// Obrigatório estar logado
router.patch('/_id/:_id', writerController.alter)
router.delete('/_id/:_id', writerController.deleteOne)

module.exports = router

