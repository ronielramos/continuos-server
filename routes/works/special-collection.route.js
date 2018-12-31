const express = require('express')
const router = express.Router()
const specialCollectionController = require('../../controllers/works/special-collection.controller')

router.post('/', specialCollectionController.create)
router.patch('/_id/:_id', specialCollectionController.alter)
router.delete('/_id/:_id', specialCollectionController.deleteOne)
router.get('/_id/:_id', specialCollectionController.findOne)
router.get('/many/:_ids', specialCollectionController.findList)
router.get('/search/:value', specialCollectionController.search)

module.exports = router