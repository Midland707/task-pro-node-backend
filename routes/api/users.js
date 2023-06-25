const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { schemasJoiUser } = require("../../models");
const {
  validateBody,
  authenticate,
  uploadAvatar,
} = require("../../middlewares");

router.get("/current", authenticate, usersController.currentUser);

router.patch(
  "/theme",
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
