const path = require('path')
const products = require("../model/products")

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const ulpoad = multer({ storage: storage })

const getProducts = (req, res, next) => {
    res.json(products)
}

const getOneProduct = (req, res, next) => {
    const product = products.find(item => item.id === req.params.id)
    res.json(product)
}

const addProduct = (req, res, next) => {
    const { id, title, price } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price
    }

    products.push(newProduct)
    res.json({ message: "Product Created" })
}

exports.getProducts = getProducts
exports.getOneProduct = getOneProduct
exports.addProduct = addProduct