const { controllerWrapper } = require("../../decorators");

const getBoard = require("./getBoard");
const addBoard = require("./addBoard");
const updateBoard = require("./updateBoard");
const removeBoard = require("./removeBoard");

module.exports = {
  getBoard: controllerWrapper(getBoard),
  addBoard: controllerWrapper(addBoard),
  updateBoard: controllerWrapper(updateBoard),
  removeBoard: controllerWrapper(removeBoard),
};
