const Joi = require("joi");

const updateBoardSchema = Joi.object({
  title: Joi.string(),
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
});

module.exports = updateBoardSchema;
