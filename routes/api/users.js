const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { schemasJoiUser } = require("../../models");
const {
  validateBody,
  authenticate,
  uploadAvatar,
} = require("../../middlewares");

router.use(authenticate);

router.get("/current", usersController.currentUser);

router.patch(
  "/themes",
  validateBody(schemasJoiUser.updateThemeSchema),
  usersController.updateTheme
);

router.patch(
  "/",
  uploadAvatar.single("avatar"),
  validateBody(schemasJoiUser.updateUserSchema),
  usersController.updateUser
);

router.post(
  "/help",
  validateBody(schemasJoiUser.sendHelpEmailSchema),
  usersController.sendHelpEmail
);

module.exports = router;
