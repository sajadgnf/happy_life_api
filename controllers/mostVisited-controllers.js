const products = require("../models/products")

const getMostVisited = (req, res, next) => {
    res.json(products.products.mostVisited)
}

const getOneMostVisited = (req, res, next) => {
    const product = products.products.mostVisited.find(item => item.id === req.params.id)

    res.json(product)
}

const addMostVisited = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.mostVisited.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getMostVisited = getMostVisited
exports.getOneMostVisited = getOneMostVisited
exports.addMostVisited = addMostVisited