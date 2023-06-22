const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateTheme,
  updateUser,
} = require("./users");

const { getBoard, addBoard, updateBoard, removeBoard } = require("./boards");

const {
  getColumn,
  addColumn,
  updateColumn,
  removeColumn,
} = require("./columns");

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateTheme,
  updateUser,

  getBoard,
  addBoard,
  updateBoard,
  removeBoard,

  getColumn,
  addColumn,
  updateColumn,
  removeColumn,
};
