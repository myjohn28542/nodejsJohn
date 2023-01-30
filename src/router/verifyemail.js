const express = require('express')
const router = express.Router()
const {email,email2} = require('../controllers/verifyemail')
const {verifyEmail, again} = require('../controllers/verifyemail2')

router.get('/test',email)
router.get('/test2',email2)
router.get('/test3/:id',verifyEmail)
router.get('/verifyEmailAgain/:id',again)

module.exports = router