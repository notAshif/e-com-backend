const express = require('express')
const router = express.Router()
const {registerUser, loginUser, logoutUser} = require('../controller/AuthoController')
const isLoggedIn = require('../middleware/isLoggedIn')


router.post('/register' , registerUser)

router.post('/login' ,loginUser)

router.get('/logout', isLoggedIn, logoutUser)

module.exports = router