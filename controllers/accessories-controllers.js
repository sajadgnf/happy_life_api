const products = require("../models/products")

const getAccessories = (req, res, next) => {
    res.json(products.products.accessories)
}

const getOneAccessory = (req, res, next) => {
    const product = products.products.accessories.find(item => item.id === req.params.id)

    res.json(product)
}

const addAccessory = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.accessories.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getAccessories = getAccessories
exports.getOneAccessory = getOneAccessory
exports.addAccessory = addAccessory