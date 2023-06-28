const { controllerWrapper } = require("../../decorators");

const currentUser = require("./currentUser");
const updateTheme = require("./updateTheme");
const updateUser = require("./updateUser");
const updateActiveBoard = require("./updateActiveBoard");
const sendHelpEmail = require("./sendHelpEmail");

module.exports = {
  currentUser: controllerWrapper(currentUser),
  updateTheme: controllerWrapper(updateTheme),
  updateUser: controllerWrapper(updateUser),
  updateActiveBoard: controllerWrapper(updateActiveBoard),
  sendHelpEmail: controllerWrapper(sendHelpEmail),
};
