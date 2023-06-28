const Joi = require("joi")

const updateColumnSchema = Joi.object({
    title: Joi.string()
  });

  module.exports= updateColumnSchema