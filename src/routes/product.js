const express = require ('express')
const controller = require ('../controllers/product')
const Router = express.Router()

Router
    .get('/', controller.getProduct)
    .get('/:id_product', controller.getProductById)
    .post('/', controller.addProduct)
    .patch('/:id_product', controller.editProduct)
    .delete('/:id_product', controller.deleteProduct)

module.exports = Router