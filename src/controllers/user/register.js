const modelRegister = require('../../models/user/register')
const modelCheck = require('../../models/check/checkemail')
const uuidv4 = require("uuid/v4")
const bcrypt = require("bcryptjs")
const form = require('../../helpers/index')

module.exports = {
  register: (req,res) => {
    const {email,role} = req.body
    let password = req.body.password
    const id = uuidv4().split('-')[0]

    const regexEmail = /.+@.+\..+/
    const regexPassword = /^[^A-Za-z0-9_]{1}[A-Z]{2}[0-9]{3}[a-z]{2}$/ //@ZZ123zz
  
    if(regexEmail.test(email) && email.length > 3) {
      if(regexPassword.test(password)) {
        password = bcrypt.hashSync(password)
        const data = {
          email,
          password,
          role,
          id_user: id,
          date_created: new Date()
        }
        modelCheck
          .checkEmail(email,role)
          .then(result => {
            if(!result.length) {
              modelRegister
                .register(data)
                .then(response => {
                  const data = {
                    id,
                    email,
                    password
                  }
                  //resolve
                  form.success(res,data)
                })
                .catch(err => {
                  //Reject
                  console.log(err)
                  res.send("Error Data")

                })
            } else {
              res.send("email already exists")
              
            }
          })
          .catch(err => {
            console.log(err)
            res.send("error when get email from database")
           
          })
      } else {
        res.send("Your password is not valid ");
      }
    } else {
      res.send("Your email is not valid");
    }
  }
}