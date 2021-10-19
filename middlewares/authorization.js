const jwt = require("jsonwebtoken")


const unlockingToken=(req,res,next)=>{
const token = req.header("x-auth-token")
if(!token){
    return res.status(401).json({
        msg: "No hay un token o es erroneo"
    })
}
try {
    const openToken = jwt.verify(token, process.env.SECRET)
    req.user = openToken.user
    next()

} catch (error) {
    console.log(error)
    return res.status(500).json({
        msgError: "Hubo un error en el proceso del token."
    })
}

}


module.exports= unlockingToken