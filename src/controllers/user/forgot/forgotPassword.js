const nodemailer = require('nodemailer')
const uuidv4 = require("uuid/v4")
const form = require('../../../helpers/index')
const model = require('../../../models/user/forgot/forgotPassword')

module.exports = {
  forgotPasswordEmail: async (req, res) => {
    const {email, role} = req.body
    const forgotId = uuidv4().split('-')[0]
    model
    .readForgot(email, role)
    .then(result => {
      let id_user = result[0].id_user
      model.postForgot(forgotId, id_user, 'Email')
      .then(result => {
        form.success(res, result)
      })
      .catch(err => {
        console.log(err)
        res.send('Error on process')
      })
    })
    .catch(err => {
      console.log(err)
      res.send('Email not found')
    })

    const main = async () => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vegetabeli.id@gmail.com",
          pass: "vegetabeli123"
        }
      });

      let info = await transporter.sendMail({
        from: "vegetabeli.id@gmail.com",
        to: `${email}`,
        subject: "Reset your password for vegetabeli",
        html: `<p>Hello,</p><p>Copy/Insert this code to reset your Vegetabeli password for your ${email} account.</p>
        <p><b>${forgotId}</b></p><p>Thank you</p>`
      });

      console.log(`Message sent: ${info.messageId}`);
      console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      form.success(
        res,
        `Message sent: ${
        info.messageId
        }, Preview URL ${nodemailer.getTestMessageUrl(info)}`
      );
    };
    main().catch(console.error);

  },
  checkIdForgot: (req,res) => {
    const {idForgot} = req.body
    model
      .readVerifyForgot(idForgot)
      .then(result => {
        console.log(result.length)
        if(result.length == 0) {
          return res.send('Wrong code')
        } else {
          return form.success(res, result)
        }
      })
      .catch(err => {
        console.log(err)
        res.send('Wrong code')
      })
  }
}