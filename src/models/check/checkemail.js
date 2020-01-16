const db = require('../../configs/db')

module.exports = {
  checkEmail: (email,role) => {
    return new Promise ((resolve, reject) => {
      if(role == 'seller') {
        db.query(`SELECT email FROM user WHERE email=? AND role='seller'`,
      [email],
      (err, response) => {
        if(!err) {
          resolve(response)
        } else {
          reject(err)
        }
      })
      } else if (role == 'buyer') {
        db.query(`SELECT email FROM user WHERE email=? AND role='buyer'`,
        [email],
        (err,response) => {
          if(!err) {
            resolve(response)
          } else {
            reject(err)
          } 
        }
        )
      }
    })
  }
}