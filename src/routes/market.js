const express = require ('express')
const controller = require ('../controllers/market')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.authentication, controller.getAllMarket)
    .get('/:id_market', auth.authentication, controller.getMarketById)
    .post('/', auth.authentication, controller.addMarket)
    .patch('/:id_market', auth.authentication, controller.editMarket)
    .delete('/:id_market', auth.authentication, controller.deleteMarket)

module.exports = Router