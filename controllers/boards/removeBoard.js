const { HttpError } = require("../../helpers");
const { Board } = require("../../models");
const { Column } = require("../../models");
const { Card } = require("../../models");

const removeBoard = async (req, res) => {
  const { id } = req.params;
  const columns = await Column.find({ columnOwner: id });
  if (!columns) {
    throw HttpError(404, "Columns not found");
  }
  const cards = await Promise.all(
    columns.map(async ({ _id: cardOwner }) => {
      return await Card.find({ cardOwner });
    })
  );
  if (!cards) {
    throw HttpError(404, "Cards not found");
  }
  const cardsDeleted = await Promise.all(
    cards.flat().map(async ({ _id: cardOwner }) => {
      return await Card.findByIdAndRemove(cardOwner);
    })
  );
  if (!cardsDeleted) {
    throw HttpError(404, "Cards not found");
  }
  const columnsDeleted = await Promise.all(
    columns.flat().map(async ({ _id: columnOwner }) => {
      return await Column.findByIdAndRemove(columnOwner);
    })
  );
  if (!columnsDeleted) {
    throw HttpError(404, "Columns not found");
  }
  const result = await Board.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "Board, him Columns and Column`s cards deleted",
  });
};

module.exports = removeBoard;
