const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { schemasJoiUser } = require("../../models");
const { validateBody, authenticate } = require("../../middlewares");

router.get("/current", authenticate, usersController.currentUser);

router.patch(
  "/themes",
  authenticate,
  validateBody(schemasJoiUser.updateThemeSchema),
  usersController.updateTheme
);

router.patch(
  "/",
  authenticate,
  validateBody(schemasJoiUser.updateUserSchema),
  usersController.updateUser
);

module.exports = router;
