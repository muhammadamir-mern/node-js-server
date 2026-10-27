const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("My first backend server is run")
})
app.listen(3000,()=>{
    console.log("My first server is run on 3000 port")
})