const express = require("express");
const {connectMongo} = require("./database/connection.js")
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const atlsurl = process.env.ATLSURL;
const route =require("./Router/Route.js");
const morgan = require("morgan");
const bodyParser = require("body-parser")



app.use(express.json())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, x-Requested-With, Content-Type, Accept, Authorization');
    if(req.header === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
})
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
connectMongo(atlsurl);


app.listen(port, (req,res)=>{
    try {
       console.log(`connect with ${port}`)
    } catch (error) {
        console.log(error)
    }   
})