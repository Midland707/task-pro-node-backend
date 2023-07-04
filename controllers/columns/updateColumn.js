const { Column } = require("../../models");
const { HttpError } = require("../../helpers");

const updateColumn = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const existingColumn = await Column.findOne({ columnOwner: id, title });
  if (existingColumn) {
    throw HttpError(404, `Column with ${title} already exist`);
  }

  const result = await Column.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  return res.status(200).json(result);
};

module.exports = updateColumn;
