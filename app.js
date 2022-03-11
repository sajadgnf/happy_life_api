const express = require('express')

const productsRoutes = require("./routes/products-routes")

const app = express()

app.use('/', productsRoutes)

app.listen(8000)
