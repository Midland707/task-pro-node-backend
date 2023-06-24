const { controllerWrapper } = require("../../decorators");

const getCard = require("./getCard");
const addCard = require("./addCard");
const updateCard = require("./updateCard");
const removeCard = require("./removeCard");

module.exports = {
  getCard: controllerWrapper(getCard),
  addCard: controllerWrapper(addCard),
  updateCard: controllerWrapper(updateCard),
  removeCard: controllerWrapper(removeCard),
};
