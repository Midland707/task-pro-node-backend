const { Card } = require("../../models");

const removeCard = async (req, res) => {
  const { id } = req.params;
  
  const result = await Card.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json({
    message: "Card deleted",
  });
};

module.exports = removeCard;