require("dotenv").config();
const express = require("express");

const registerController = require("../controllers/user/register");
const loginController = require("../controllers/user/login");
const forgotController = require("../controllers/user/forgot/forgotPassword");
const crudController = require("../controllers/user/crud/crudUser");

const auth = require("../helpers/auth");

const Router = express.Router();

Router.get("/", auth.authentication, crudController.getAllUser);
Router.get("/id/:id_user", auth.authentication, crudController.getUser);
Router.post("/", auth.authentication, crudController.postUser);
Router.patch("/:id_user", auth.authentication, crudController.patchUser);
Router.delete("/:id_user", auth.authentication, crudController.deleteUser);

Router.post("/register", registerController.register);
Router.get("/login", loginController.login);
Router.get("/otp", loginController.loginPhone);
Router.post("/forgot", forgotController.forgotPasswordEmail);
Router.post("/verifyforgot", forgotController.checkIdForgot);
Router.post("/verifyotp", loginController.verifyOTP);
Router.patch("/resetpassword/:id_user", crudController.patchForgotUser);

module.exports = Router;
