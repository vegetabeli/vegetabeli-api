const express = require ('express')
const controller = require ('../controllers/market')
const Router = express.Router()

Router
    .get('/', controller.getAllMarket)
    .get('/:id_market', controller.getMarketById)
    .post('/', controller.addMarket)
    .patch('/:id_market', controller.editMarket)
    .delete('/:id_market', controller.deleteMarket)

module.exports = Router