const express = require('express')
const productsRoutes = require("./routes/product-routes")
const app = express()
const cors = require('cors')
const compression = require('compression')
let port = process.env.PORT || 8000

app.use(
    compression({
        level: 6,
        threshold: 10 * 1000,
        filter: (req, res) => {
            if (req.headers['x-no-compression']) {
                return false
            }
            return compression.filter(req, res)
        }
    })
)

app.use(
    cors({
        origin: "*"
    })
)

app.use('/', productsRoutes)

app.listen(port, () => console.log("apps are running on localhost:" + port))
