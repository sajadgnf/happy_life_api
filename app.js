const express = require('express')

const productsRoutes = require("./routes/products-routes")

const app = express()

app.use('/', productsRoutes)

app.listen(process.env.PORT || 8000)
