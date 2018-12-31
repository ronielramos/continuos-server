const express = require('express')
const router = express.Router()
const workCollectionController = require('../../controllers/works/work-collection.controller')

router.post('/', workCollectionController.create)
router.patch('/_id/:_id', workCollectionController.alter)
router.delete('/_id/:_id', workCollectionController.deleteOne)
router.get('/_id/:_id', workCollectionController.findOne)
router.get('/many/:_ids', workCollectionController.findList)
router.get('/search/:value', workCollectionController.search)

module.exports = router