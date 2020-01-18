const db = require('../../configs/db')

module.exports = {
  login: (email,role) => {
    return new Promise ((resolve,reject) => {
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
  loginPhone: (phone, role) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE phone = ? AND role = ?`,
        [phone, role],
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
  insertOTP: (otp, id_user, type) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `INSERT INTO forgot_code SET Code = ?, id_user = ?, Type = ?`,
        [otp, id_user, type],
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
  verifyOTP: (otp) => {
    return new Promise ((resolve, reject) => {
      db.query(
        `SELECT * FROM forgot_code WHERE Code = ?`,
        [otp],
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