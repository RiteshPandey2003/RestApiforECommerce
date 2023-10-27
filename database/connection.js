const mongoose = require("mongoose")

const connectMongo = async(DBURL)=>{
    return mongoose.connect(DBURL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
    })
    .then(()=>console.log("connected to database"))
}

module.exports = {
    connectMongo,
};