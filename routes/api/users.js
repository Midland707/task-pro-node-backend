const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
// const { validateBody, auth, fileUpload } = require("../../middlewares");
const { schemasJoiUser } = require("../../models");
const { validateBody } = require("../../middlewares");

router.post(
  "/register",
  validateBody(schemasJoiUser.registerUserSchema),
  usersController.registerUser
);
router.post(
  "/login",
  validateBody(schemasJoiUser.loginUserSchema),
  usersController.loginUser
);
router.get(
  "/current",
  // auth,
  usersController.currentUser
);
router.post(
  "/logout",
  // auth,
  usersController.logoutUser
);

router.patch(
  "/theme",
  //   auth,
  usersController.updateTheme
);

router.patch(
  "/",
  //   auth,
  usersController.updateUser
);

module.exports = router;
