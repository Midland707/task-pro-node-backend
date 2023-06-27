const { Board } = require("../../models");

const getBoard = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Board.find({ owner }).popolate("owner");
  res.json(result);
};

module.exports = getBoard;
