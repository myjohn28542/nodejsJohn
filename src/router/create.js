const express = require('express')
const router = express.Router()
const product = require('../controllers/product')

router.post('/create',product)


module.exports = router