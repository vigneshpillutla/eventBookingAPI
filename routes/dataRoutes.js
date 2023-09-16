const express = require('express')
const userController = require('../controllers/userController')
const { getSports,getVenueAndEquipmentBySport } = userController
const {isAuthenticated} = require('../middlewares/userAuth')

const router = express.Router()

router.get('/sports',getSports)

router.get('/venue/:sportId',getVenueAndEquipmentBySport)

module.exports = router
