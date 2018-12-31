const express = require('express')
const router = express.Router()
const licenseController = require('../controllers/works-items/license.controller')

router.post('/', licenseController.create)
router.patch('/_id/:_id', licenseController.alter)
router.delete('/_id/:_id', licenseController.deleteOne)
router.get('/_id/:_id', licenseController.findOne)
router.get('/many/:_ids', licenseController.findList)
router.get('/search/:value', licenseController.search)

module.exports = router