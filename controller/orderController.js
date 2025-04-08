const order = require('../db/models/order');
const product = require('../db/models/product');
const catchAsync = require('../utils/catchAsync')

const createOrder = catchAsync (async (req,res,next)=>{
    const body = req.body;

    const newOrder = await order.create({
        productId:body.productId,
        wigName:body.wigName,
        customerName:body.customerName,
        location:body.location,
        length:body.length,
        color:body.color,
        styleType:body.styleType,
        frontalType:body.frontalType,
        wigType:body.wigType,
        serviceType:body.serviceType,
        orderDate:body.orderDate,
        deliveryDate:body.deliveryDate
    })
    return res.status(201).json({
        status:'success',
        data: newOrder,
    })
})


const getAllOrders = catchAsync (async (req,res,next)=>{
    const orders = await order.findAll()
    return res.status(200).json({
        status:'success',
        data: orders,
    })
}
)
module.exports = createOrder, getAllOrders;