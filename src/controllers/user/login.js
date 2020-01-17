const model = require('../../models/user/login')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  login: (req, res) => {
    const {email, password, role} = req.query

    model
      .login(email, role)
      .then(result => {
        console.log(result[0].id_user)
        const id_user = result[0].id_user
        const passwordHash = result[0].password

        if(bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign(
            {id_user},
            'e55b272e9526bc6b71d5de434d7b01f7340d95397bd6bac4b41120b03ae8740450ade949a27513a71b62a4e1fd464ed7ee5e11e25d19de8d0af236671545c24d',
            {expiresIn: "24h"}
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
          res.send("Password incorrect!")
        }
      })
      .catch(err => {
        console.log(err)
        res.send("Email or Password incorrect!")
      })
  }
}