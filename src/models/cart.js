const db = require('../configs/db')

module.exports = {
    getAllCart: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT cart.id_cart, GROUP_CONCAT(DISTINCT product.name) AS product_name, cart.id_user, user.email AS buyer_email, cart.id_market, market.name AS market_name, cart.total, cart.date_transaction, cart.date_updated
            FROM product_taken
            RIGHT JOIN cart ON cart.id_cart = product_taken.id_cart
            LEFT JOIN product ON product.id_product = product_taken.id_product
            JOIN user ON user.id_user = cart.id_user
            JOIN market ON market.id_market = cart.id_market
            GROUP BY cart.id_cart`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getCartById: (id) => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT cart.id_cart, GROUP_CONCAT(DISTINCT product.name) AS product_name, cart.id_user, user.email AS buyer_email, cart.id_market, market.name AS market_name, cart.total, cart.date_transaction, cart.date_updated
            FROM product_taken
            RIGHT JOIN cart ON cart.id_cart = product_taken.id_cart
            LEFT JOIN product ON product.id_product = product_taken.id_product
            JOIN user ON user.id_user = cart.id_user
            JOIN market ON market.id_market = cart.id_market
            GROUP BY cart.id_cart WHERE id_cart='${id}'`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getCartByBuyer: (id) => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT cart.id_cart, GROUP_CONCAT(DISTINCT product.name) AS product_name, cart.id_user, user.email AS buyer_email, cart.id_market, market.name AS market_name, cart.total, cart.date_transaction, cart.date_updated
            FROM product_taken
            RIGHT JOIN cart ON cart.id_cart = product_taken.id_cart
            LEFT JOIN product ON product.id_product = product_taken.id_product
            JOIN user ON user.id_user = cart.id_user
            JOIN market ON market.id_market = cart.id_market
            GROUP BY cart.id_cart WHERE id_cart='${id}'`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addCart: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO cart SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editCart: (data, id_cart) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE cart SET ? WHERE id_cart = ?', [data, id_cart], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteCart: (id_cart) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM cart WHERE id_cart = ?', id_cart, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}