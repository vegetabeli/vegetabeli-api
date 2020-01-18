const express = require ('express')
const controller = require ('../controllers/help')
const Router = express.Router()

const auth = require('../helpers/auth')

Router
    .get('/', auth.authentication, controller.getHelp)
    .get('/:id_help', auth.authentication, controller.getHelpById)
    .post('/', auth.authentication, controller.addHelp)
    .patch('/:id_help', auth.authentication, controller.editHelp)
    .delete('/:id_help', auth.authentication, controller.deleteHelp)

module.exports = Router