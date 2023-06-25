const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { schemasJoiUser } = require("../../models");
const {
  validateBody,
  authenticate,
  uploadAvatar,
} = require("../../middlewares");

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
router.get("/current", authenticate, usersController.currentUser);
router.post("/logout", authenticate, usersController.logoutUser);

router.patch(
  "/themes",
  authenticate,
  validateBody(schemasJoiUser.updateThemeSchema),
  usersController.updateTheme
);

router.patch(
  "/",
  authenticate,
  uploadAvatar.single("avatar"),
  validateBody(schemasJoiUser.updateUserSchema),
  usersController.updateUser
);

module.exports = router;
