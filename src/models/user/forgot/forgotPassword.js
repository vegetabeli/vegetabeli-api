const db = require('../../../configs/db')

module.exports = {
  postForgot: (code, id_user, type) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO forgot_code SET Code = ?, id_user = ?, type = ?`,
        [code, id_user, type],
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
  readForgot: (email, role) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE email = ? AND role = ?`,
        [email, role],
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
  readVerifyForgot: (code) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM forgot_code WHERE Code = ?`,
        [code],
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