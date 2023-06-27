const { Column } = require("../../models");

const getColumn = async (req, res) => {
  const { id: columnOwner } = req.params;
  const result = await Column.find({ columnOwner });
  res.json(result);
};

module.exports = getColumn;
