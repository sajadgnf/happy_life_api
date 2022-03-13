const express = require('express')
const productsRoutes = require("./routes/product-routes")
const app = express()
let port = process.env.PORT || 8000

app.use('/', productsRoutes)

app.listen(port, () => console.log("apps are running on localhost:" + port))
