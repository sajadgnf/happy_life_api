const products = require("../models/products")

const getAmazing = (req, res, next) => {
    res.json(products.products.amazing)
}

const getOneAmazing = (req, res, next) => {
    const product = products.products.amazing.find(item => item.id === req.params.id)

    res.json(product)
}

const addAmazing = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.amazing.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getAmazing = getAmazing
exports.getOneAmazing = getOneAmazing
exports.addAmazing = addAmazing