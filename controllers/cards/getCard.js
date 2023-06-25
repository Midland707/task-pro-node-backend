const { Card } = require("../../models");

const getCard = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Card.find({ owner });
  res.json(result);
};

module.exports = getCard;