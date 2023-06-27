const { Column, Card } = require("../../models");

const addCard = async (req, res) => {
  // const { id: cardOwner } = req.params;
  // const result = await Card.create({ ...req.body, cardOwner });
  // res.status(201).json(result);

  const { id: cardOwner } = req.params;
  const column = await Column.findById(cardOwner);
  if (!column) {
    return res.status(404).json({ error: "Column not found" });
  }
  const card = new Card({ ...req.body, cardOwner });
  await card.save();
  column.cards.push(card);
  await column.save();
  res.status(201).json(card);
};

module.exports = addCard;
