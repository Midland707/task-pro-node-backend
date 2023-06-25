const { registerUser, loginUser, logoutUser } = require("./auth");

const { currentUser, updateTheme, updateUser } = require("./users");

const {
  getBoard,
  getBoardById,
  addBoard,
  updateBoard,
  removeBoard,
} = require("./boards");

const {
  getColumn,
  addColumn,
  updateColumn,
  removeColumn,
} = require("./columns");

const { getCard, addCard, updateCard, removeCard } = require("./cards");

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateTheme,
  updateUser,

  getBoard,
  getBoardById,
  addBoard,
  updateBoard,
  removeBoard,

  getColumn,
  addColumn,
  updateColumn,
  removeColumn,

  getCard,
  addCard,
  updateCard,
  removeCard,
};
