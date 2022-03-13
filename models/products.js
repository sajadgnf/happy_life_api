const fs = require('fs');

let buff = fs.readFileSync('assets/image 11.png', { encoding: 'base64' });
let base64data = buff.toString('base64')

const products = [
    {
        id: "1",
        title: "... و دو سیم کارت رم ۸ گیگابایت Galaxy S21 FE 5G گوشی موبایل سامسونگ مدل ظرفیت ۲۵۶",
        price: "۱۷٬۲۰۰٬۰۰۰",
        image: `data:image/png;base64, ${base64data}`
    }
]

exports.products = products

// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const productSchema = new Schema({
//     title: { type: String, required: true },
//     price: { type: Number, required: true },
// })

// module.exports = mongoose.model('Product', productSchema)
