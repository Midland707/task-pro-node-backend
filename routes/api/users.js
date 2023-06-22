const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
// const { validateBody, auth, fileUpload } = require("../../middlewares");
// const { schemasUser } = require("../../models");

router.post(
  "/register",
  //   validateBody(schemasUser.regLogSchema),
  usersController.registerUser
);
router.post(
  "/login",
  //   validateBody(schemasUser.regLogSchema),
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
