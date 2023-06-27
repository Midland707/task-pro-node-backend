const { Column } = require("../../models");
const { HttpError } = require("../../helpers");

const addColumn = async (req, res) => {
  const { id: columnOwner } = req.params;
  const { title } = req.body;

  const existingColumn = await Column.findOne({ columnOwner, title });
  if (existingColumn) {
    throw HttpError(404, `Column with ${title} already exist`);
  }

  const result = await Column.create({ ...req.body, columnOwner });
  res.status(201).json(result);
};

module.exports = addColumn;
