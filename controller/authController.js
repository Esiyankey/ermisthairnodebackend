const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const user = require("../db/models/user")

const generateToken =(payload)=>{
    return jwt.sign(payload,process.env.JWTSECRETKEY,{
        expiresIn:process.env.JWTEXPIRESIN
    })
}
const signup = async (req,res,next)=>{
    const body = req.body;



    if(!['1','2'].includes(body.userType)){
        return res.status(400).json({
            status:'fail',
            message:'Invalid user Type',
        });
    }
    const newUser = await user.create({
        userType:body.userType,
        userName:body.userName,
        email:body.email,
        password:body.password,
        confirmPassword:body.confirmPassword,
    })


    const result = newUser.toJSON()
    delete result.password;
    delete result.deletedAt;


    result.token = generateToken({
        id:result.id,
    })


    if(!newUser) {
        return res.status(400).json({
            status:'fail',
            message:'failed to create user',
        });
    }

    return res.status(201).json({
        status:'success',
        data:result
    })

}

const login = async (req,res,next)=>{
    const {email,password}= req.body

    if (!email|| !password){
       return res.status(400).json({
            status:"fail",
            message:"please provide email and password"
        })
    }


    const result =await user.findOne({where:{email}});
    const isPasswordMatch = await bcrypt.compare(password,result.password)
    if (!result || !isPasswordMatch){
        return res.status(401).json({
            status:"failure",
            message:"wrong email or password "
        })
    }


     const token = generateToken({
        id:result.id
     })
     return res.json({
        status:"success",
        token,
     })
}


module.exports={signup,login};