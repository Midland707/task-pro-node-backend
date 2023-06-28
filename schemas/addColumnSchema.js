const Joi = require("joi")

const addColumnSchema = Joi.object({
    title: Joi.string().required().messages({ 'any.required': 'missing required Column title' }),
    owner: Joi.string(),
  });

  module.exports= addColumnSchema