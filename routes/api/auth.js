const express = require("express");
const router = express.Router();
const authController = require("../../controllers");
const { schemasJoiUser } = require("../../models");
const { validateBody, authenticate } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemasJoiUser.registerUserSchema),
  authController.registerUser
);

router.post(
  "/login",
  validateBody(schemasJoiUser.loginUserSchema),
  authController.loginUser
);

router.post("/logout", authenticate, authController.logoutUser);

module.exports = router;
