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
      default: null,
    },
    background: {
      type: String,
      default: null,
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
