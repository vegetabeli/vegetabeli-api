const express = require ('express')
const controller = require ('../controllers/product')
const Router = express.Router()

const auth = require('../helpers/auth')

const cache = require('../helpers/cache') 

Router
    .get('/', controller.getProduct)
    .get('/product/:id_product', controller.getProductById)
    .get('/user/:id_user', controller.getProductByUser)
    .get('/market/:id_market', controller.getProductByMarket)
    .post('/', controller.addProduct)
    .patch('/:id_product', controller.editProduct)
    .delete('/:id_product', controller.deleteProduct)

module.exports = Router