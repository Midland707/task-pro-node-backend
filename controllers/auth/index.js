const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  logoutUser: controllerWrapper(logoutUser),
};
