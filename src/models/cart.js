const db = require('../configs/db')

module.exports = {
    getAllCart: () => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM cart', (err, response) =>{
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
            db.query(`SELECT * FROM cart WHERE id_cart='${id}'`, (err, response) =>{
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
            db.query(`SELECT * FROM cart WHERE id_cart='${id}'`, (err, response) =>{
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
    editCart: (data, id_category) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE cart SET ? WHERE id_category = ?', [data, id_category], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteCart: (id_category) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM cart WHERE id_category = ?', id_category, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}