
const products = require("../models/products")

const getProducts = (req, res, next) => {
    res.json(products)
}

const getOneProduct = (req, res, next) => {
    const product = products.products.find(item => item.id === req.params.id)

    res.json(product)
}

const addProduct = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getProducts = getProducts
exports.getOneProduct = getOneProduct
exports.addProduct = addProduct