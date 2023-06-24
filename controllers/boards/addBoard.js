const { Board } = require("../../models");

const addBoard = async (req, res) => {
  const { _id: owner } = req.user;
  // const { _id } = req.user;
  console.log("_id = ", owner);
  const result = await Board.create({ ...req.body, owner });
  //
  res.status(201).json("result");
};

module.exports = addBoard;
