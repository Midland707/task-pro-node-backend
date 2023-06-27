const { Card, Column } = require("../../models");
const { HttpError } = require("../../helpers");

const removeCard = async (req, res) => {
  const { id } = req.params;

  const card = await Card.findById(id);
  if (!card) {
    throw HttpError(404);
  }
  // const card = await Card.findByIdAndRemove(id);
  // if (!card) {
  //   throw HttpError(404);
  // }
  console.log("card.columnOwner =", card.cardOwner);
  Column.findOneAndUpdate(
    { _id: card.cardOwner },
    { $pull: { cards: card._id } },
    { new: true }
  ).populate("cards");

  res.json({
    message: "Card deleted",
  });
};

module.exports = removeCard;
