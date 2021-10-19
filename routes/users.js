const express = require("express")
const router = express.Router()
const {check} = require("express-validator")

const userController = require("./../controllers/usersController")

router.post("/create",
[
    check("username", "El nombre es necesario").not().isEmpty(),
    check("email", "Agrega un email valido").isEmail(),
    check("password", "El password debe ser minimo de 5 caracteres").isLength({min:5})
]

, userController.createUser)




module.exports = router