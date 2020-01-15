const model = require ('../models/cart')
const helpers = require ('../helpers/index')
const uuid = require('uuid/v4')


module.exports = {
    getAllCart: (req, res) => {
        model
          .getAllCart ()
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    getCartById: (req, res) => {
        const id_cart = req.params.id_cart
        model
          .getCartById (id_cart)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    getCartByBuyer: (req, res) => {
        const user = req.params.id_user
        model
          .getCartByBuyer (user)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addCart: (req, res) => {
        const id_cart = uuid().split('-')[0]
        const { id_user, id_market } = req.body
        const data = {
            
        }

        model.addCart(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })

    },
    editCart: (req, res) => {
        const id_cart = req.params.id_cart
        const { name } = req.body
        const data = {name}

        model.editCart(data, id_cart)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteCart: (req, res) => {
        const id_cart = req.params.id_cart

        model.deleteCart(id_cart)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}