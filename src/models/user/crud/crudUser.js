const db = require('../../../configs/db')

module.exports = {
  getAllUser: () => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user`,
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  getUser: (id_user) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE id_user = ?`,
        [id_user],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  postUser: (data) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO user (name, photo, phone, data_updated) VALUES (?,?,?)`,
        [data.name, data.photo, data.phone, data.data_updated],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  patchUser: (data, id_user) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `UPDATE user SET ? WHERE id_user = ?`,
        [data, id_user],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  },
  deleteUser: (id_user) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `DELETE FROM user WHERE id_user = ?`,
        [id_user],
        (err, response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          }
        }
      )
    })
  }
}