require('dotenv').config({path:`${process.cwd()}/.env`})
const cors = require('cors')
const express = require("express")


const authRouter = require('./route/authRouter');
const orderRouter = require('./route/orderRouter');
const productRouter = require('./route/productRouter');
const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(cors({origin: 'http://localhost:3000',credentials: true}))
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/order',orderRouter)
app.use('/api/v1/product',productRouter)


const PORT = process.env.APP_PORT || 3030



app.use('*', catchAsync (async (req,res,next)=>{
   throw new AppError("hey you just made an error",404)
   
}));

app.use(globalErrorHandler)



app.listen (PORT,() =>{
    console.log("app listening on port 3030")
}) 