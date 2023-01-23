const express = require('express')
const router = express.Router()
const {createOrganiztion, updateOrganiztion, deleteOrganiztion, findByIdOrganiztion, findOrganiztion} = require('../controllers/organiztion')
const  {retrieve}  = require('../controllers/user')

router.post('/create',createOrganiztion)
router.post('/update/:id',updateOrganiztion)
router.post('/delete/:id',deleteOrganiztion )
router.get('/findById/:id',findByIdOrganiztion )
router.get('/find',findOrganiztion)

module.exports = router