const {Client}=require('pg')
const express =require("express")
const app = express()
app.use(express.json())
const { host } = require('pg/lib/defaults')

const con = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"password",
    database:"ermisthairdb" 
})

con.connect().then(()=>console.log("Ermist Hair Database Connected"))