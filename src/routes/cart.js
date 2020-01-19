const express = require ('express')
const controller = require ('../controllers/cart')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', controller.getAllCart)
    .get('/cart/:id_cart', controller.getCartById)
    .get('/user/:id_user', controller.getCartByBuyer)
    .post('/', controller.addCart)
    .patch('/:id_cart', controller.editCart)
    .delete('/:id_cart', controller.deleteCart)

module.exports = Router