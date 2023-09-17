const express = require('express')
const userController = require('../controllers/userController')
const { getSports,getVenueAndEquipmentBySport } = userController
const {isAuthenticated, isAdmin} = require('../middlewares/userAuth')
const { createBookingRequest, getPendingBookingRequests, approveBookingRequest } = require('../controllers/bookingController')

const router = express.Router()

router.use(isAuthenticated)

router.post('/book',createBookingRequest)

router.get('/booking',getPendingBookingRequests)

router.post('/booking/approve/:bookingId',isAdmin,approveBookingRequest)

module.exports = router
