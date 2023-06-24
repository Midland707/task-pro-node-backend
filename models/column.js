const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");

const columnSchema = new Schema(
  {
    title: {
      type: String,
      default: "New Column",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: false }
);

columnSchema.post("save", mongooseError);

const Column = model("column", columnSchema);

module.exports = { Column };
