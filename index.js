const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const route =require("./Router/Route.js");
const { connect } = require("mongoose");
const morgan = require("morgan");

app.use("/",route);
app.use((req,res,next)=>{
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})
app.use((error,req,res,next) =>{
    res.status(res.status || 500);
    res.json({
        error : {
            msg : error.msg,
        }
    })
})
app.use(morgan('dev'));

app.listen(port, (req,res)=>{
    try {
       console.log(`connect with ${port}`)
    } catch (error) {
        console.log(error)
    }   
})