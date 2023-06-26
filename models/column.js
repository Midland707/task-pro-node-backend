const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    columnOwner: {
      type: String,
    },
  },
  { versionKey: false, timestamps: false }
);

columnSchema.post("save", mongooseError);

const Column = model("column", columnSchema);

module.exports = { Column };
