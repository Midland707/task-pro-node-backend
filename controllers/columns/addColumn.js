const { Column } = require("../../models");
const { HttpError } = require("../../helpers");

const addColumn = async (req, res) => {
  const { _id: owner } = req.user;
  
const { title } = req.body;

  const existingColumn = await Column.findOne({ owner, title });
  if (existingColumn) {
    throw HttpError(404, `Column with ${title} already exist`);
  }

  const result = await Column.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addColumn;


