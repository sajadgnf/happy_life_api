const products = require("../models/products")

const getHeadphones = (req, res, next) => {
    res.json(products.products.headphones)
}

const getOneHeadphone = (req, res, next) => {
    const product = products.products.headphones.find(item => item.id === req.params.id)

    res.json(product)
}

const addHeadphone = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.headphones.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getHeadphones = getHeadphones
exports.getOneHeadphone = getOneHeadphone
exports.addHeadphone = addHeadphone