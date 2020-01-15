const db = require('../configs/db')

module.exports = {
    getAllProductTaken: () => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM product_taken', (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getProductTakenById: (id) => {
      return new Promise ((resolve, reject) =>{
          db.query(`SELECT * FROM product_taken WHERE id_product_taken='${id}'`, (err, response) =>{
              if (!err) {
                  resolve (response)
              }else{
                  reject (err)
              }
          })
      })
    },
    addProductTaken: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO product_taken SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editProductTaken: (data, id_product_taken) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE product_taken SET ? WHERE id_product_taken = ?', [data, id_product_taken], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteMarket: (id_product_taken) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM product_taken WHERE id_product_taken = ?', id_product_taken, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}