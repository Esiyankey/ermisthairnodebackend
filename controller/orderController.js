const catchAsync = require('../utils/catchAsync')
const createOrder = catchAsync (async (req,res,next)=>{
    const body = req.body;

    const newOrder = await order.create({
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
        data:newOrder
    })
})