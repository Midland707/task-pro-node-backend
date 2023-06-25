const { Column } = require("../../models");
const { HttpError } = require("../../helpers");

const removeColumn = async (req, res) => {
  const { id } = req.params;
  const result = await Column.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "column deleted",
  });
};

module.exports = removeColumn;
