const model = require('../../../models/user/crud/crudUser')
const form = require('../../../helpers/index')
const bcrypt = require("bcryptjs")

module.exports = {
  getAllUser: (req, res) => {
    model
      .getAllUser()
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getUser: (req, res) => {
    const {id_user} = req.params
    model
      .getUser(id_user)
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  postUser: (req, res) => {
    const {name, photo, phone} = req.body
    const data = {
      name,
      photo,
      phone,
      data_updated: new Date()
    }
    model
      .postUser(data)
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  patchUser: (req, res) => {
    const {id_user} = req.params
    const {body} = req

    model
      .patchUser(body, id_user)
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  patchForgotUser: (req, res) => {
    const { id_user } = req.params
    const { password } = req.body
    
    const regexPassword = /^[^A-Za-z0-9_]{1}[A-Z]{2}[0-9]{3}[a-z]{2}$/
    if(regexPassword.test(password)) {
      let newPassword = bcrypt.hashSync(password)
      model
        .patchForgotUser(newPassword, id_user)
        .then(result => {
          form.success(res, result)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      res.send('Your password pattern is invalid')
    }
  },
  deleteUser: (req, res) => {
    const {id_user} = req.params

    model
      .deleteUser(id_user)
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}