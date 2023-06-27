const Joi = require("joi")

const addCardSchema = Joi.object({
    title: Joi.string().required().messages({ 'any.required': 'missing required Card title' }),
    description: Joi.string(),
    label:Joi.string(),
    deadline: Joi.date().iso(),
    owner: Joi.string(),
  });

  module.exports= addCardSchema