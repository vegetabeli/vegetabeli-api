const db = require('../configs/db')

module.exports = {
    getHelp: () => {
        return new Promise ((resolve, reject) =>{
            db.query('SELECT * FROM help', (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    getHelpById: () => {
        return new Promise ((resolve, reject) =>{
            db.query(`SELECT * FROM help WHERE id_help='${id_help}'`, (err, response) =>{
                if (!err) {
                    resolve (response)
                }else{
                    reject (err)
                }
            })
        })
    },
    addHelp: (data) => {
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
    editHelp: (data, id_help) => {
        return new Promise((resolve, reject) => {
          db.query('UPDATE help SET ? WHERE id_help = ?', [data, id_help], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
    deleteHelp: (id_help) => {
        return new Promise((resolve, reject) => {
          db.query('DELETE FROM help WHERE id_help = ?', id_help, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
}