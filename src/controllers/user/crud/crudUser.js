const model = require('../../../models/user/crud/crudUser')
const form = require('../../../helpers/index')

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
    const {query} = req

    model
      .patchUser(query, id_user)
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
      })
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