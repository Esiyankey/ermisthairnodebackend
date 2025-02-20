const { signup } = require("../controller/authController")
const {login} = require("../controller/authController")
const express = require("express");

const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)


module.exports = router;