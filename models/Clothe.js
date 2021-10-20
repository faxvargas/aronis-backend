const mongoose = require("mongoose")

const clotheSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    talla:{
        type: Number,
        required:true
    },
    pictureUrl:{
         type:String,
         required:true
    },
    color:{
         type:String,
         required:true
    } 
})


const Clothe = mongoose.model("Clothe", clotheSchema )


module.exports = Clothe