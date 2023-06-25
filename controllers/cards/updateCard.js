const { Card } = require("../../models");

const updateCard = async (req, res) => {
  const {id}= req.params
  const {_id: owner} = req.user
  const result = await Card.findByIdAndUpdate({_id:id, owner}, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  return res.status(200).json(result);
};


module.exports = updateCard;