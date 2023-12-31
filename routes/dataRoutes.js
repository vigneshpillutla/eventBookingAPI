const express = require('express')
const userController = require('../controllers/userController')
const { getSports,getVenueAndEquipmentBySport, getEquipments, getEquipmentsBySport } = userController
const {isAuthenticated} = require('../middlewares/userAuth')

const router = express.Router()

router.get('/sports',getSports)
router.get('/equipments',getEquipments)
router.get('/equipments/sport/:sportId',getEquipmentsBySport)

router.get('/venue/sport/:sportId',getVenueAndEquipmentBySport)

module.exports = router
