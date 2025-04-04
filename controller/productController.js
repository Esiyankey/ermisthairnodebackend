
const product = require("../db/models/product");
const catchAsync = require("../utils/catchAsync");

const addProduct = catchAsync(async (req,res)=>{
    const {productName,category,productPrice,hairType,hairColor,hairLength} = req.body;
    const productImage = req.file ? req.file.path : null;

    const newProduct = await product.create({
        productName,
        category,
        productPrice,
        hairType,
        hairColor,
        hairLength,
        productImage,
    });

    if(!newProduct){
        return next(new AppError("Product not found", 400));
    }
    res.status(201).json({
        status: "success",
        data: newProduct,
    });
    console.log(newProduct)
})





const getAllProducts = catchAsync(async (req,res)=>{
    const allProducts = await product.findAll();
    return res.status(200).json({
        status:"success",
        data:allProducts
    })
})



module.exports = {
  addProduct,
  getAllProducts
};