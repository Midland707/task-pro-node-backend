const { Board } = require("../../models");
const { HttpError } = require("../../helpers");

const getBoardById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Board.findOne({ _id: id, owner });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = getBoardById;
