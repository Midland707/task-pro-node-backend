const { controllerWrapper } = require("../../decorators");

const currentUser = require("./currentUser");
const updateTheme = require("./updateTheme");
const updateUser = require("./updateUser");

module.exports = {
  currentUser: controllerWrapper(currentUser),
  updateTheme: controllerWrapper(updateTheme),
  updateUser: controllerWrapper(updateUser),
};
