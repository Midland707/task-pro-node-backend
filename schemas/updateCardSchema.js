const Joi = require("joi")

const updateCardSchema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    label:Joi.string().valid('without', 'low', 'medium','high'),
    deadline: Joi.date().iso(),
  });

  module.exports= updateCardSchema