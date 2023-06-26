const { Board } = require("../../models");
const { Column } = require("../../models");
const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const getBoardById = async (req, res) => {
  const { id: columnOwner } = req.params;
  const result = await Column.find({ columnOwner }).populate(
    "columnOwner",
    "icon"
  );
  // const result1 = await Card.find({ cardOwner }).populate(
  //   "columnOwner",
  //   "email"
  // );
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = getBoardById;
