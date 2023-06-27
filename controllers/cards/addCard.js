const { Card } = require("../../models");
const { HttpError } = require("../../helpers");

const addCard = async (req, res) => {
  const {_id: owner} = req.user

  const { title } = req.body;

  const existingCard = await Card.findOne({ owner, title });
  if (existingCard) {
    throw HttpError(404, `Card with ${title} already exist`);
  }

  const result = await Card.create({...req.body, owner});
  res.status(201).json(result);
};

module.exports = addCard;