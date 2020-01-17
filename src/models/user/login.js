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
  }
}