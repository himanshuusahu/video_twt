
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
    path:"./env"
})

connectDB()
 












//Professinal approch 1
/*
import express from "express"
 const app = express()
(async()=>{
    try{
        await mongoose.connect('${process.env.DB_URI}/${DB_NAME}')
        app.on("error",(error)=>{
            console.log("error",error);
        })
        app.listen(process.env.PORT,()=>{
            console.log("app is listening on port")
        })
    }
    catch(error){
        console.log(error)
    }
})()
*/