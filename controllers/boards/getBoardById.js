const { Board } = require("../../models");
const { Column } = require("../../models");
const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const getBoardById = async (req, res) => {
  const { id: columnOwner } = req.params;
  const columns = await Column.find({ columnOwner });
  const cards = await Promise.all(
    columns.map(async ({ _id: cardOwner }) => {
      return await Card.find({ cardOwner });
    })
  );

  if (!cards) throw HttpError(404);
  res.json({ columns, cards: cards.flat() });
};

module.exports = getBoardById;
