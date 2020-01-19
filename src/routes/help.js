const express = require ('express')
const controller = require ('../controllers/help')
const Router = express.Router()


Router
    .get('/', controller.getHelp)
    .get('/:id_help', controller.getHelpById)
    .post('/', controller.addHelp)
    .patch('/:id_help', controller.editHelp)
    .delete('/:id_help', controller.deleteHelp)

module.exports = Router