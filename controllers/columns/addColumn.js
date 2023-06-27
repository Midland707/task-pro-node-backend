const { Column } = require("../../models");

const addColumn = async (req, res) => {
  const { id: columnOwner } = req.params;
  const result = await Column.create({ ...req.body, columnOwner });
  res.status(201).json(result);
};

module.exports = addColumn;
