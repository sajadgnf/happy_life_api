
const products = require("../models/products")

const getMobiles = (req, res, next) => {
    res.json(products.products.mobiles)
}

const getOneMobile = (req, res, next) => {
    const product = products.products.mobiles.find(item => item.id === req.params.id)

    res.json(product)
}

const addMobile = (req, res, next) => {
    const { id, title, price, image } = req.body

    const newProduct = {
        id: id,
        title: title,
        price: price,
        image: image
    }

    products.products.mobiles.push(newProduct)

    res.json({ message: 'Product Created' })
}

exports.getMobiles = getMobiles
exports.getOneMobile = getOneMobile
exports.addMobile = addMobile