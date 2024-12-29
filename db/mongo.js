const mongoose= require("mongoose")


const db = function (){
    const connection = mongoose.connect("mongodb://localhost:27017/harkirat")
    if(connection){
        return console.log("mongo db connected!!");
    }
    console.log("connection error!!");
    
}

module.exports= db