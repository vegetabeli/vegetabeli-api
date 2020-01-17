const express = require ('express')
const controller = require ('../controllers/productTaken')
const Router = express.Router()
const auth = require('../helpers/auth')


Router
    .get('/', auth.authentication, controller.getAllProductTaken)
    .get('/:id_product_taken', auth.authentication, controller.getProductTakenById)
    .post('/', auth.authentication, controller.addProductTaken)
    .patch('/:id_product_taken', auth.authentication, controller.editProductTaken)
    .delete('/:id_product_taken', auth.authentication, controller.deleteProductTaken)

module.exports = Router