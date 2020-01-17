const db = require('../configs/db')

module.exports = {
    getCategory: () => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM category', (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addCategory: (data) => {
        return new Promise ((resolve, reject) =>{
            db.query('INSERT INTO category SET ?', data, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    editCategory: (data, id_category) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE category SET ? WHERE id_category = ?', [data, id_category], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteCategory: (id_category) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM category WHERE id_category = ?', id_category, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}