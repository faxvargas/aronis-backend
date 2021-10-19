const express = require("express")
const router = express.Router()

const clotheController = require("./../controllers/clotheController")

router.get("/get-all", clotheController.getAllClothes)

router.post("/create", clotheController.createClothe)

router.put("/update", clotheController.updateClothe)

router.delete("/delete", clotheController.deleteClothe)

module.exports = router 