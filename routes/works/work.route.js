const express = require('express')
const router = express.Router()
const workController = require('../../controllers/works/work.controller')

router.post('/', workController.create)
router.patch('/_id/:_id', workController.alter)
router.delete('/_id/:_id', workController.deleteOne)
router.get('/_id/:_id', workController.findOne)
router.get('/many/:_ids', workController.findList)
router.get('/search/:value', workController.search)

module.exports = router