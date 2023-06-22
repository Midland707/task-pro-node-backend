const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateTheme,
  updateUser,
} = require("./users");

const { getBoard, addBoard, updateBoard, removeBoard } = require("./boards");

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
};
