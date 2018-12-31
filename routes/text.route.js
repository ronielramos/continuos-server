const express = require('express')
const router = express.Router()
const textController = require('../controllers/text.controller')

router.post('/', textController.create)
router.patch('/_id/:_id', textController.alter)
router.delete('/_id/:_id', textController.deleteOne)
router.get('/_id/:_id', textController.findOne)
router.get('/many/:_ids', textController.findList)
router.get('/search/:value', textController.search)

module.exports = router