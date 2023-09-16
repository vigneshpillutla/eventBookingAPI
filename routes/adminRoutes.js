const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const {isAuthenticated,isAdmin} = require('../middlewares/userAuth')
const { addVenue } = require('../controllers/adminController')

const router = express.Router()
router.use(isAuthenticated,isAdmin);

router.post('/venue',addVenue)

module.exports = router
