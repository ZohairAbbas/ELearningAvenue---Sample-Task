const express = require('express')
const controller = require('../controller/controllers')

const router = express.Router()

router.post('/getUser', controller.getUser)
router.post('/getAccount', controller.getAccount)

module.exports = router
