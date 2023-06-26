const { Board } = require("../../models");
const { Column } = require("../../models");
const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const getBoardById = async (req, res) => {
  const { id: columnOwner } = req.params;
  const result = await Column.find({ columnOwner });
  const result1 = await Column.find({ cardOwner });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = getBoardById;
