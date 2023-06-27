const Joi = require("joi");

const addBoardSchema = Joi.object({
    title: Joi.string().required().messages({ 'any.required': 'missing required Board title' }),
    icon: Joi.string().uri().optional(),
    background: Joi.string(),
    owner: Joi.string(),
  });

  module.exports= addBoardSchema