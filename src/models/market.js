const db = require('../configs/db')

module.exports = {
    getAllMarket: () => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM market', (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getMarketById: (id) => {
      return new Promise ((resolve, reject) =>{
          db.query(`SELECT * FROM market WHERE id_market='${id}'`, (err, response) =>{
              if (!err) {
                  resolve (response)
              }else{
                  reject (err)
              }
          })
      })
    },
    addMarket: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO market SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editMarket: (data, id_market) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE market SET ? WHERE id_market = ?', [data, id_market], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteMarket: (id_market) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM market WHERE id_market = ?', id_market, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}