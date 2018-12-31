const express = require('express')
const router = express.Router()
const tagController = require('../controllers/works-items/tag.controller')

router.post('/', tagController.create)
router.patch('/_id/:_id', tagController.alter)
router.delete('/_id/:_id', tagController.deleteOne)
router.get('/_id/:_id', tagController.findOne)
router.get('/many/:_ids', tagController.findList)
router.get('/search/:value', tagController.search)

module.exports = router