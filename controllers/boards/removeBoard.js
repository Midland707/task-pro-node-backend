const { HttpError } = require("../../helpers");
const { Board } = require("../../models");

const removeBoard = async (req, res) => {
  const { id } = req.params;
  const result = await Board.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "Board deleted",
  });
};

module.exports = removeBoard;
