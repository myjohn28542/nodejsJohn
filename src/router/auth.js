const express = require('express')
const router = express.Router()
const { login, register} = require('../controllers/user')
const { verifyemail} = require('../middleware/verifyemail')

router.post('/register',register)
router.post('/login', login)
//router.post('/verifyemail/:id', verifyemail)

module.exports = router