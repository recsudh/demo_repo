const express= require("express")
const user = require("../models/user")
const route = express.Router()

route.post("/create",async (req,res)=>{
       try{
         console.log(req.body);
         const data = await new user(req.body)
        
         await data.save()
         res.status(201).send(data)
        }catch(e){
            res.send(e)
        }
})

// get post
route.get("/fetch",async (req,res)=>{
    const data =  await user.find({})
    res.status(200).json(data)
})


// update

route.patch("/update/:name",async(req,res)=>{
    try{
        const User = await user.findOne({name:req.params.name})
        
        if(!user){
            throw new Error('invalid details!!')
        }
        const update = req.body
        
        User.kidneys= User.kidneys.concat(update)
        await User.save()
        console.log(User.kidneys);
        res.json(User.kidneys)

    }catch(e){
        res.json(e)
    }
})

route.delete("/delete/:_id",async (req,res)=>{

    console.log(req.params._id);
    const User = await user.findByIdAndDelete({_id:req.params._id.toString()})
    if(!User){
        return res.json("nod User found!!")
    }
    // await User.save()
    res.json("done")
})


module.exports= route