const express = require ('express')
const controller = require ('../controllers/category')
const Router = express.Router()

Router
    .get('/', controller.getCategory)
    .post('/', controller.addCategory)
    .patch('/:id_category', controller.editCategory)
    .delete('/:id_category', controller.deleteCategory)

module.exports = Router