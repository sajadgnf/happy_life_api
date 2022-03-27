const products = require("../models/products")

const getMostSales = (req, res, next) => {
    res.json(products.products.mostSales)
}

const getOneMostSales = (req, res, next) => {
    const product = products.products.mostSales.find(item => item.id === req.params.id)

    res.json(product)
}

const addMostSales = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.mostSales.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getMostSales = getMostSales
exports.getOneMostSales = getOneMostSales
exports.addMostSales = addMostSales