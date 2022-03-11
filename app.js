const express = require('express')
const productsRoutes = require("./routes/products-routes")
const app = express()
let port = process.env.PORT || 8000

app.use('/', productsRoutes)

app.listen(port)
