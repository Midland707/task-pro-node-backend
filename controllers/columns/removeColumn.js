const { Column } = require("../../models");
const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const removeColumn = async (req, res) => {
  // const { id } = req.params;
  const { id } = req.params;
  console.log("id = ", id);
  const cards = await Card.find({ cardOwner: id });
  if (!cards) {
    throw HttpError(404, "Cards not found");
  }
  const cardsDeleted = await Promise.all(
    cards.map(async ({ _id: cardOwner }) => {
      return await Card.findByIdAndRemove(cardOwner);
    })
  );
  if (!cardsDeleted) {
    throw HttpError(404, "Cards not found");
  }
  const result = await Column.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Column not found");
  }
  res.json({
    message: "Column and him cards deleted",
  });
};

module.exports = removeColumn;
