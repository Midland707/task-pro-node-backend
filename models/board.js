const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      enum: [
        "icon-four-circles",
        "icon-star",
        "icon-yo-yo",
        "icon-puzzle-piece",
        "icon-box",
        "icon-lightning-small",
        "icon-three-circles",
        "icon-circle-box",
      ],
      default: "icon-four-circles",
    },
    background: {
      type: String,
      default: "empty",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: false }
);

boardSchema.post("save", mongooseError);

const Board = model("board", boardSchema);

module.exports = { Board };
