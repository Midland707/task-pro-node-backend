const { controllerWrapper } = require("../../decorators");

const getColumn = require("./getColumn");
const addColumn = require("./addColumn");
const updateColumn = require("./updateColumn");
const removeColumn = require("./removeColumn");

module.exports = {
  getColumn: controllerWrapper(getColumn),
  addColumn: controllerWrapper(addColumn),
  updateColumn: controllerWrapper(updateColumn),
  removeColumn: controllerWrapper(removeColumn),
};
