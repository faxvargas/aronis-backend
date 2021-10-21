    // IMPORTACIONES 
const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")

require("dotenv").config()

connectDB()

app.use(cors())
app.use(express.json({extended:true}))

app.use("/api/clothes", require("./routes/clothes.js"))
app.use("/api/users", require("./routes/users.js"))
app.use("/api/auth", require("./routes/auth.js"))

app.listen(process.env.PORT,()=>{
    console.log("aroni's working")
})