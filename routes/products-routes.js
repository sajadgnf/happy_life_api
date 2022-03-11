const express = require("express")
const { getProducts, getOneProduct, addProduct } = require("../controllers/products-controllers")

const router = express.Router()

router.get("/products", getProducts)
router.get("/products/:id", getOneProduct)
router.post("/add-product", addProduct)


module.exports = router