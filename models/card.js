const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const cardSchema = new Schema(
  {
    title: {
      type: String,
      default: "New Task",
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      enum: ["without", "low", "medium", "high"],
      default: "without",
    },
    deadline: {
      type: String,
      default: null,
    },
    cardOwner: {
      type: String,
    },
  },
  { versionKey: false, timestamps: false }
);

cardSchema.post("save", mongooseError);

const Card = model("card", cardSchema);

module.exports = { Card };
