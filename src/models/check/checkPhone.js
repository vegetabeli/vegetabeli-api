const db = require('../../configs/db')

module.exports = {
  checkPhone: (phone, role) => {
    return new Promise ((resolve, reject) => {
      if (role == "seller") {
        db.query(
          `SELECT phone FROM user WHERE phone=? AND role='seller'`,
          [phone],
          (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          }
        );
      } else if (role == "buyer") {
        db.query(
          `SELECT phone FROM user WHERE phone=? AND role='buyer'`,
          [phone],
          (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          }
        );
      }
    })
  }
}