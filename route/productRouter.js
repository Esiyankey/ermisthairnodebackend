const express = require("express");
const { addProduct } = require("../controller/productController");

const router = express.Router()

router.post('/addProduct', addProduct)

module.exports = router;