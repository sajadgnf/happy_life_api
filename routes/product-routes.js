const express = require('express')

const router = express.Router()
// mobiles
const mobilesControllers = require('../controllers/mobiles-controllers')

router.get('/mobiles', mobilesControllers.getMobiles)

router.get('/mobiles/:id', mobilesControllers.getOneMobile)

router.post('/add-mobile', mobilesControllers.addMobile)

// headphones
const headphonesControllers = require('../controllers/headphones-controllers')

router.get('/headphones', headphonesControllers.getHeadphones)

router.get('/headphones/:id', headphonesControllers.getOneHeadphone)

router.post('/add-headphone', headphonesControllers.addHeadphone)

// accessories
const accessoriesControllers = require('../controllers/accessories-controllers')

router.get('/accessories', accessoriesControllers.getAccessories)

router.get('/accessories/:id', accessoriesControllers.getOneAccessory)

router.post('/add-accessory', accessoriesControllers.addAccessory)

// amazing
const amazingControllers = require('../controllers/amazing-controllers')

router.get('/amazing', amazingControllers.getAmazing)

router.get('/amazing/:id', amazingControllers.getOneAmazing)

router.post('/add-amazing', amazingControllers.addAmazing)

// mostVisited
const mostvisitedControllers = require('../controllers/mostVisited-controllers')

router.get('/most-visited', mostvisitedControllers.getMostVisited)

router.get('/most-visited/:id', mostvisitedControllers.getOneMostVisited)

router.post('/add-most-visited', mostvisitedControllers.addMostVisited)

// mostSales
const mostSalesControllers = require('../controllers/mostSales-controllers')

router.get('/most-sales', mostSalesControllers.getMostSales)

router.get('/most-sales/:id', mostSalesControllers.getOneMostSales)

router.post('/add-most-sales', mostSalesControllers.addMostSales)

module.exports = router