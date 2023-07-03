const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const updateCard = async (req, res) => {
  const { id } = req.params;
  const result = await Card.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  return res.status(200).json(result);
};

module.exports = updateCard;
