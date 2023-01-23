const express = require('express')
const router = express.Router()
const {createProduct, updateProduct ,deleteProduct, findByIdProduct ,findProduct} = require('../controllers/product')
const  {retrieve}  = require('../controllers/user')

router.post('/create',createProduct)
router.post('/update/:id',updateProduct )
router.post('/delete/:id',deleteProduct )
router.get('/findById/:id',findByIdProduct )
router.get('/find',findProduct)

module.exports = router