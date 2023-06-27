const { Board } = require("../../models");
const {HttpError}= require("../../helpers")

const addBoard = async (req, res) => {
  const { _id: owner } = req.user;

  const { title } = req.body;

  const existingBoard = await Board.findOne({ owner, title });
  if (existingBoard) {
    throw HttpError(404, `Board with ${title} already exist`);
  }
  const result = await Board.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addBoard;
