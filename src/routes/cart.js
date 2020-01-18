const express = require("express");
const controller = require("../controllers/cart");
const Router = express.Router();

const auth = require("../helpers/auth");

Router.get("/", auth.authentication, controller.getAllCart)
  .get("/cart/:id_cart", auth.authentication, controller.getCartById)
  .get("/user/:id_user", auth.authentication, controller.getCartByBuyer)
  .post("/", auth.authentication, controller.addCart)
  .patch("/:id_cart", auth.authentication, controller.editCart)
  .delete("/:id_cart", auth.authentication, controller.deleteCart);

module.exports = Router;
