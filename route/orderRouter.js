const createOrder = require("../controller/orderController");

const express = require("express");

const router = express.Router()

router.post('/order',createOrder)

module.exports = router;