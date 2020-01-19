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
        // const id_cart = uuid().split('-')[0]
        const { id_cart, id_user, id_market, full_name, order_address, email, phone, order_note, session_id, payment_method, total } = req.body
        const data = {
            id_cart,
            id_user,
            id_market,
            full_name,
            order_address,
            email,
            phone,
            order_note,
            session_id,
            payment_method,
            total,
            date_transaction: new Date(),
            date_updated: new Date()
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
        const { id_user, id_market, full_name, order_address, email, phone, order_note, session_id, payment_method, total } = req.body
        const data = {id_user, id_market, full_name, order_address, email, phone, order_note, session_id, payment_method, total, date_updated: new Date()}

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


