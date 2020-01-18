const express = require('express')
const market = require('./market')
const product = require('./product')
const productTaken = require('./productTaken')
const category = require('./category')
const cart = require('./cart')
const user = require('./user')
const help = require('./help')
// const registerController = require('../controllers/user/register')
// const loginController = require('../controllers/user/login')


const Router = express.Router ();

Router.use('/market', market)
Router.use('/product', product)
Router.use('/product_taken', productTaken)
Router.use('/category', category)
Router.use('/cart', cart)
Router.use('/user', user)
Router.use('/help', help)
// Router.use('/register', registerController)

module.exports = Router