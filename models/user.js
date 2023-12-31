const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");
Joi.objectId = require("joi-objectid")(Joi);

const passNameRegex = /^[a-zA-Z0-9]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const themeList = ["light", "violet", "dark"];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "You must provide a name"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegex,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    theme: {
      type: String,
      enum: themeList,
      default: "dark",
    },
    avatarURL: String,
    activeBoard: {
      type: String,
      default: "",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", mongooseError);

const User = model("user", userSchema);

const registerUserSchema = Joi.object({
  password: Joi.string()
    .min(6)
    .max(64)
    .pattern(passNameRegex)
    .required()
    .messages({
      "string.pattern.base": "Password can only contain Latin letters, numbers",
      "string.min": "Password must be at least {#limit} characters long",
      "string.max": "Password must not exceed {#limit} characters",
      "any.required": "Password is required",
    }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  name: Joi.string().min(2).max(32).pattern(passNameRegex).required().messages({
    "string.pattern.base": "Name can only contain Latin letters, numbers",
    "string.min": "Name must be at least {#limit} characters long",
    "string.max": "Name must not exceed {#limit} characters",
    "any.required": "Name is required",
  }),
});

const loginUserSchema = Joi.object({
  password: Joi.string().required().messages({
    "any.required": "You must enter a password.",
  }),
  email: Joi.string().required().messages({
    "any.required": "You must enter a email",
  }),
});

const updateThemeSchema = Joi.object({
  theme: Joi.string()
    .valid(...themeList)
    .required()
    .messages({
      "any.required": "Theme is required",
      "any.only": "Invalid theme value",
    }),
});

const updateUserSchema = Joi.object({
  password: Joi.string().min(6).max(64).pattern(passNameRegex).messages({
    "string.pattern.base": "Password can only contain Latin letters, numbers",
    "string.min": "Password must be at least {#limit} characters long",
    "string.max": "Password must not exceed {#limit} characters",
  }),
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  name: Joi.string().min(2).max(32).pattern(passNameRegex).required().messages({
    "string.pattern.base": "Name can only contain Latin letters, numbers",
    "string.min": "Name must be at least {#limit} characters long",
    "string.max": "Name must not exceed {#limit} characters",
    "any.required": "Name is required",
  }),
});

const sendHelpEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.pattern.base": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  message: Joi.string().min(10).required().messages({
    "string.min": "Please, explain your problem in more detail",
    "any.required": "Describe your problem",
  }),
});

const updateActivBoardSchema = Joi.object({
  activeBoard: Joi.objectId().required().messages({
    "string.pattern.base": "Email must be a valid email address",
    "any.required": "activeBoard is required",
  }),
});

const schemasJoiUser = {
  registerUserSchema,
  loginUserSchema,
  updateThemeSchema,
  updateUserSchema,
  sendHelpEmailSchema,
  updateActivBoardSchema,
};

module.exports = {
  User,
  schemasJoiUser,
};
