const express = require("express");
const { addProduct, getAllProducts } = require("../controller/productController");

const router = express.Router()

router.post('/addProduct', addProduct)
router.get("/getAllProducts", getAllProducts);

module.exports = router;