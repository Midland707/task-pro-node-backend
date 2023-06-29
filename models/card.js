const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      enum: ["without", "low", "medium", "high"],
      default: "without",
    },
    deadline: {
      type: Date,
      default: Date.now(),
    },
    cardOwner: {
      type: Schema.Types.ObjectId,
      ref: "column",
    },
  },
  { versionKey: false, timestamps: false }
);

cardSchema.post("save", mongooseError);

const Card = model("card", cardSchema);

module.exports = { Card };
