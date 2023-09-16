const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const {isAuthenticated,userExists, isAdmin} = require('../middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.get('/',isAuthenticated,isAdmin,(req,res) => {
  console.log(req.user)
  res.send("hit")
})
router.post('/signup', userExists, signup)

//login route
router.post('/login', login )

module.exports = router
