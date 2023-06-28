const { controllerWrapper } = require("../../decorators");

const getBoard = require("./getBoard");
const getBoardById = require("./getBoardById");
const addBoard = require("./addBoard");
const updateBoard = require("./updateBoard");
const removeBoard = require("./removeBoard");

module.exports = {
  getBoard: controllerWrapper(getBoard),
  getBoardById: controllerWrapper(getBoardById),
  addBoard: controllerWrapper(addBoard),
  updateBoard: controllerWrapper(updateBoard),
  removeBoard: controllerWrapper(removeBoard),
};
