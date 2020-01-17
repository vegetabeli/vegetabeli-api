const model = require('../../models/user/login')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  login: (req, res) => {
    const {email, password, role} = req.query

    model
      .login(email, role)
      .then(result => {
        const id_user = result[0].id_user
        const passwordHash = result[0].password

        if(bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign(
            {id_user},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "90d"}
          )

          res.json({
            status:200,
            message: "Login Success",
            data: {
              id_user,
              email,
              token
            }
          })
        } else {
          res.json({
            status:400,
            message: "Password incorrect!"
          })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(400).json({
          status:400,
          message: "Email or Password incorrect!"
        })
      })
  }
}