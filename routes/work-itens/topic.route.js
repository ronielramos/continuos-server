const express = require('express')
const router = express.Router()
const topicController = require('../controllers/works-items/topic.controller')

router.post('/', topicController.create)
router.patch('/_id/:_id', topicController.alter)
router.delete('/_id/:_id', topicController.deleteOne)
router.get('/_id/:_id', topicController.findOne)
router.get('/many/:_ids', topicController.findList)
router.get('/search/:value', topicController.search)

module.exports = router