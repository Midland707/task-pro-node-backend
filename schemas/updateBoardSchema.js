const Joi = require("joi");

const updateBoardSchema = Joi.object({
    title: Joi.string(),
    icon: Joi.string().uri().optional(),
    background: Joi.string(),
  });

  module.exports= updateBoardSchema