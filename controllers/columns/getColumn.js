const { Column } = require("../../models");

const getColumn = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Column.find({ owner });
  res.json(result);
};

module.exports = getColumn;
