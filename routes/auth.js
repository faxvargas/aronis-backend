const express = require("express")
const router = express.Router()

const authController = require("./../controllers/authController")

const authorization = require("./../middlewares/authorization")

const {check} = require("express-validator")

router.post("/login",
[
    check("email","Ingrese un email valido").isEmail(),
    check("password", "No enviaste un password valido").not().isEmpty()
]
, authController.loginUser)

router.get("/verifying-token",authorization, authController.verifyingToken)

module.exports = router