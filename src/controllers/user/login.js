const model = require('../../models/user/login')
const modelGetUser = require('../../models/user/crud/crudUser')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uuidv4 = require("uuid/v4")
const client = require("twilio")(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

module.exports = {
  login: (req, res) => {
    const { email, password, role } = req.query;

    model
      .login(email, role)
      .then(result => {
        console.log(result[0].id_user);
        console.log('hahaha',result)
        const roles = result[0].role
        const id_user = result[0].id_user;
        const passwordHash = result[0].password;

        if (bcryptjs.compareSync(password, passwordHash)) {
          const token = jwt.sign(
            { id_user },
            "e55b272e9526bc6b71d5de434d7b01f7340d95397bd6bac4b41120b03ae8740450ade949a27513a71b62a4e1fd464ed7ee5e11e25d19de8d0af236671545c24d",
            { expiresIn: "24h" }
          );

          res.json({
            status: 200,
            message: "Login Success",
            data: {
              id_user,
              email,
              token,
              role: roles
            }
          });
        } else {
          res.send("Password incorrect!");
        }
      })
      .catch(err => {
        console.log(err);
        res.send("Email or Password incorrect!");
      });
  },
  loginPhone: (req, res) => {
    res.header("Content-Type", "application/json");
    const {role, password} = req.query
    let to = req.query.to[0] == '0' ? req.query.to.replace(req.query.to[0], '+62') : req.query.to
    const id = uuidv4().split('-')[0]
    model
      .loginPhone(to, role)
      .then(async result => {
        console.log('qwew',result)
        const id_user = result[0].id_user;
        const email = result[0].email;
        const passwordHash = result[0].password

        if (bcryptjs.compareSync(password, passwordHash)) {
          await model
            .insertOTP(id, id_user, 'OTP')
          client.messages
            .create({
              from: process.env.TWILIO_PHONE_NUMBER,
              to: to,
              body: `Your OTP code is ${id}`
            })
            .then(() => {
              const token = jwt.sign(
                { id_user },
                "e55b272e9526bc6b71d5de434d7b01f7340d95397bd6bac4b41120b03ae8740450ade949a27513a71b62a4e1fd464ed7ee5e11e25d19de8d0af236671545c24d",
                { expiresIn: "24h" }
              );  

              res.json({
                status: 200,
                message: "Login Success",
                data: {
                  id_user,
                  email,
                  token,
                  role
                }
              });
              res.send(JSON.stringify({ success: true }));
            })
            .catch(err => {
              console.log(err);
              res.send(JSON.stringify({ success: false }));
            });
        } else {
          res.send("Password incorrect!");
        }      
      })
      .catch(err => {
        console.log(err)
        res.send('Phone Number not found')
      })
  },
  verifyOTP: (req, res) => {
    const {otp} = req.body
    model
      .verifyOTP(otp)
      .then(result => {
        const id_user = result[0].id_user;
        modelGetUser
          .getUser(id_user)
          .then(result => {
            let email = result[0].email
            let role = result[0].role
            const token = jwt.sign(
              { id_user },
              "e55b272e9526bc6b71d5de434d7b01f7340d95397bd6bac4b41120b03ae8740450ade949a27513a71b62a4e1fd464ed7ee5e11e25d19de8d0af236671545c24d",
              { expiresIn: "24h" }
            );  

            res.json({
              status: 200,
              message: "Login Success",
              data: {
                id_user,
                email,
                token,
                role
              }
            });
          })
          .catch(err => {
            console.log(err)
            res.send('Error')
          })
      })
      .catch(err => {
        console.log(err)
        res.send('Wrong Code!')
      })
  }
};