const db = require('../../configs/db')

module.exports = {
  register: (data) => {
    return new Promise ((resolve, reject) => {
      db.query(`INSERT INTO user (email, password, role, id_user, date_created) VALUES (?,?,?,?,?)`,
      [data.email,data.password,data.role,data.id_user,data.date_created],
      (err, response) => {
        if(!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  }
}