const User = require("./../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")

exports.loginUser = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty) {
        return res.status(400).json({
            msgError: errors.array()
        })
    }
    
    const { email, password } = req.body
    try {
        let foundUser = await User.findOne({ email })
        if (!foundUser) {
            return res.status(400).json({
                msgError: "El usuario o la contraseña estan incorrectas"
            })
        }
        const verifiedPassword = await bcryptjs.compare(password, foundUser.hashedPassword)
        if (!verifiedPassword) {
            return res.status(400).json({
                msgError: "El usuario o el password son incorrectos"
            })
        }
        const payload = {
            user: {
                id: foundUser._id
            }
        }
        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 36000
            },
            (error, token) => {
                console.log(error)
                if (error) {
                    return res.status(401).json({
                        msgError: "Hubo un problema en la creacion del token"
                    })
                }
                return res.json({
                    data: {
                        token
                    }
                })
            }
        )

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msgError: "Hubo un problema creando el usuario "
        })
    }
}

exports.verifyingToken = async (req, res) => {
    try {
        const userData = await User.findById(req.user.id).select("-hashedPassword")
        return res.json({
            data: {
                user: userData
            }
        })
    } catch (error) {
        return res.status(500).json({
            msgError: "Hubo un error"
        })
    }

}