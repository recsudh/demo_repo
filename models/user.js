const mongoose = require("mongoose")

const userschma = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!!"]
    },
    kidneys:[
      {  
        kidney:{
            type:String,
    }
    }]
})



const User = mongoose.model("User",userschma)

module.exports= User