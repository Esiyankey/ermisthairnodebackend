const multer = require("multer");
const express = require("express");
const upload = multer({ dest: "uploads/" });
const { addProduct, getAllProducts } = require("../controller/productController");

const router = express.Router()

router.post('/addProduct', upload.single("productImage"), addProduct)
router.get("/getAllProducts", getAllProducts);

module.exports = router;