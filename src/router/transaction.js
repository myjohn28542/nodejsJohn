const express = require('express')
const router = express.Router()
const {createTransaction, updateTransaction ,deleteTransaction, findByIdTransaction ,findTransaction} = require('../controllers/transaction')
const  {retrieve}  = require('../controllers/user')

router.post('/create',createTransaction)
router.post('/update/:id',updateTransaction )
router.post('/delete/:id',deleteTransaction )
router.get('/findById/:id',findByIdTransaction )
router.get('/find',findTransaction)

module.exports = router