const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const currentUser = require("./currentUser");
const logoutUser = require("./logoutUser");
const updateTheme = require("./updateTheme");
const updateUser = require("./updateUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  currentUser: controllerWrapper(currentUser),
  logoutUser: controllerWrapper(logoutUser),
  updateTheme: controllerWrapper(updateTheme),
  updateUser: controllerWrapper(updateUser),
};
