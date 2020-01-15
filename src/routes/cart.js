const express = require ('express')
const controller = require ('../controllers/cart')
const Router = express.Router()

Router
    .get('/', controller.getAllCart)
    .get('/:id_cart', controller.getCartById)
    .get('/:id_user', controller.getCartByBuyer)
    .post('/', controller.addCart)
    .patch('/:id_cart', controller.editCart)
    .delete('/:id_cart', controller.deleteCart)

module.exports = Router