const Joi = require("joi");

const addBoardSchema = Joi.object({
    title: Joi.string().required().messages({ 'any.required': 'missing required Board title' }),
    icon: Joi.string().valid(
      "icon-four-circles",
      "icon-star",
      "icon-yo-yo",
      "icon-puzzle-piece",
      "icon-box",
      "icon-lightning-small",
      "icon-three-circles",
      "icon-circle-box"
    ),
    background: Joi.string(),
    owner: Joi.string(),
  });

  module.exports= addBoardSchema