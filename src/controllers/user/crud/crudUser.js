const model = require('../../../models/user/crud/crudUser')
const form = require('../../../helpers/index')
const multer = require('multer')
const path = require('path')
const helpers = require('../../../helpers/index')

const storage = multer.diskStorage({
  destination: './public/uploads/user',
  filename: (req, file, cb)=>{
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: {
      fileSize: 1*1024*1024
  },
  fileFilter: helpers.imageFilter
}).single('photo')

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
    upload(req, res, (err) =>{
      if(err){
        res.status(400).json({
            message: err
        })
      }else{
        const {name, phone} = req.body
        const photo = req.file ? req.file.filename : req.file
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
      }
    })
  },
  patchUser: (req, res) => {
    upload(req, res, (err) =>{
      if(err){
        res.status(400).json({
            message: err
        })
      }else{
      
        const {id_user} = req.params
        const { name, phone, email, password } = req.body
        const data = {
              name,
              photo,
              phone,
              email,
              password
        }
        model
          .patchUser(data, id_user)
          .then(result => {
            form.success(res, result)
          })
          .catch(err => {
            console.log(err)
          })
      }
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