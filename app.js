require('dotenv').config({path:`${process.cwd()}/.env`})
const express = require("express")


const authRouter = require('./route/authRouter')
const app = express();

app.use(express.json());

app.use('/api/v1/auth',authRouter)


const PORT = process.env.APP_PORT || 3030
app.get("/",(req,res)=>{ 
    res.status(200).json({
        status:"success",
        message:"Rest apis at work"
    })
});


app.use('*',(req,res,next)=>{
    res.status(404).json({
        status:'failed',
        message:"route not found "
    })
})



app.listen (PORT,() =>{
    console.log("app listening on port 3030")
}) 