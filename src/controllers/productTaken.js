const model = require ('../models/productTaken')
const helpers = require ('../helpers/index')
const uuid = require('uuid/v4')

module.exports = {
    getAllProductTaken: (_, res) => {
        model
          .getAllProductTaken ()
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    getProductTakenById: (req, res) => {
        const id = req.params.id_product_taken
        model
          .getAllProductTaken (id)
          .then (response => {
            helpers.success (res, response)
          })
          .catch (err => {
            console.log (err);
          });
      },
    addProductTaken: (req, res) => {
        const id_product_taken = uuid().split('-')[0]
        const { id_cart, id_product } = req.body
        const data = {
            id_product_taken,
            id_product,
            id_cart,
        }

        model.addProductTaken(data)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
        
    },
    editProductTaken: (req, res) => {
                const id_product_taken = req.params.id_product_taken
                const { id_product, id_cart } = req.body
                const data = {
                    id_product,
                    id_cart
                }
        
                model.editProductTaken(data, id_product_taken)
                    .then(result => {
                        res.json(result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    },
    deleteProductTaken: (req, res) => {
        const id = req.params.id_product_taken

        model.deleteProductTaken(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
}