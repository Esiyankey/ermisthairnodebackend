const express = require("express")

const authRouter = require('./route/authRouter')
const app = express();

app.use(express.json());

app.use('/api/v1/auth',authRouter)

app.get("/",(req,res)=>{ 
    res.status(200).json({
        status:"success",
        message:"Rest apis at work"
    })
});




app.listen (3030,() =>{
    console.log("app listening on port 3030")
}) 