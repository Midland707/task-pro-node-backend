const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const updateCardSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  label: Joi.string().valid("without", "low", "medium", "high"),
  deadline: Joi.date().iso(),
  cardOwner: Joi.objectId(),
});

module.exports = updateCardSchema;
