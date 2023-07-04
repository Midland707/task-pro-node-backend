const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const updateBoard = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const { title } = req.body;

  const existingBoard = await Board.findOne({ owner, title });
  if (existingBoard) {
    if (existingBoard._id.toString() !== id) {
      throw HttpError(404, `Board with ${title} already exist`);
    }
  }

  const result = await Board.findByIdAndUpdate({ _id: id, owner }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  return res.status(200).json(result);
};

module.exports = updateBoard;
