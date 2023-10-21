const express = require("express");
const app = require(express());

app.listen(3000, (req,res)=>{
   console.log("connected to the server");
})