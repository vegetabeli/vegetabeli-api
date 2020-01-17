const express = require ('express')
const controller = require ('../controllers/category')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.authentication, controller.getCategory)
    .post('/', auth.authentication, controller.addCategory)
    .patch('/:id_category', auth.authentication, controller.editCategory)
    .delete('/:id_category', auth.authentication, controller.deleteCategory)

module.exports = Router