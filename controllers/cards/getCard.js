const { Card } = require("../../models");

const getCard = async (req, res) => {
  const { id: cardOwner } = req.params;
  const result = await Card.find({ cardOwner });
  res.json(result);
};

module.exports = getCard;
