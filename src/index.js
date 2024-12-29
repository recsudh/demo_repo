const express= require("express")
const user_route= require("../routes/user_route")
const db = require("../db/mongo")

db()

const app = express()

app.use(express.json())
app.use(user_route)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`port is on @ ${port}`);
})