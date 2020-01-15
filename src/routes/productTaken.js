const express = require ('express')
const controller = require ('../controllers/productTaken')
const Router = express.Router()

Router
    .get('/', controller.getAllProductTaken)
    .get('/:id_product_taken', controller.getProductTakenById)
    .post('/', controller.addProductTaken)
    .patch('/:id_product_taken', controller.editProductTaken)
    .delete('/:id_product_taken', controller.deleteProductTaken)

module.exports = Router