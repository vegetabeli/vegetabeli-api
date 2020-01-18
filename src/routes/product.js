const express = require ('express')
const controller = require ('../controllers/product')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.authentication, controller.getProduct)
    .get('/product/:id_product', auth.authentication, controller.getProductById)
    .get('/market/:id_product', auth.authentication, controller.getProductByMarket)
    .post('/', auth.authentication, controller.addProduct)
    .patch('/:id_product', auth.authentication, controller.editProduct)
    .delete('/:id_product', auth.authentication, controller.deleteProduct)

module.exports = Router