const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const addCard = async (req, res) => {
  const { id: cardOwner } = req.params;
  const { title } = req.body;

  const existingCard = await Card.findOne({ cardOwner, title });
  if (existingCard) {
    throw HttpError(404, `Card with ${title} already exist`);
  }

  const result = await Card.create({ ...req.body, cardOwner });
  res.status(201).json(result);
};

module.exports = addCard;
