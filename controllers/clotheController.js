const Clothe = require("./../models/Clothe")

exports.getAllClothes =  async (req,res) =>{
     try {
         const clothes = await  Clothe.find({})
         console.log(clothes)
         return res.json({
             data: clothes
         })
     } catch (error) {
         console.log(error)
        return res.status(500).json({
             data:null,
             errorMsg: "Estamos tratando de solucionarlo."
         })
     }  
}

exports.createClothe = async(req,res)=>{
    const{
        name,
        talla,
        pictureUrl,
        color
    } = req.body
    try {
        const newClothe = await Clothe.create({
            name,
            talla,
            pictureUrl,
            color
        })
        res.json({
            data: newClothe,
            msg: "Ropita hecha:3"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            errorMsg:"No se pudo crear la ropa"
        })
    }
}

exports.updateClothe = async(req,res)=>{
 const{
     id,
    name,
    talla,
    pictureUrl,
    color  
 } = req.body
 try {
     const updateClothe = await Clothe.findByIdAndUpdate(id,{
        name,
        talla,
        pictureUrl,
        color   
     },{new:true})
     return res.json({
         data: updateClothe
     })
 } catch (error) {
     console.log(error)
     return res.status(500).json({
         errorMsg: "No se pudo actualizar"
     })
 }
}

exports.deleteClothe = async (req,res)=>{
    const {id} = req.body
    try {
        const deleteClothe = await Clothe.findByIdAndRemove({ _id: id})

        res.json({
            data: deleteClothe,
            msg: "Se borró la prenda exitosamente"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msgError: "Pasó algo inesperado al momento de intentar eliminar la prenda"
        })
    }
}