const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const passNameRegex = /^[a-zA-Z0-9]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const nameRegex = /^[a-zA-Z0-9]+$/;
const themeList = ["light", "violet", "dark"];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "You must provide a name"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      //   match: passwordRegex,
      //   minlength: 6,
      //   maxlength: 64,
      //   trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegex,
      unique: true,
    },
    token: String,
    avatarURL: String,

    verify: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      enum: themeList,
      default: "dark",
    },
    // verificationToken: {
    //   type: String,
    //   required: [true, "Verify token is required"],
    // },
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

//     .messages({
//   "string.pattern.base": "{#label} can only contain Latin letters, numbers",
//   "string.min": "{#label} must be at least {#limit} characters long",
//   "string.max": "{#label} must not exceed {#limit} characters",
//   "any.required": "{#label} is required",
// })

//     .options({ messages: { wrapArrays: false } });

const loginUserSchema = Joi.object({
  password: Joi.string().required().messages({
    "any.required": "You must enter a password.",
  }),
  email: Joi.string().required().messages({
    "any.required": "You must enter a email",
  }),
});

const schemasJoiUser = { registerUserSchema, loginUserSchema };

module.exports = {
  User,
  schemasJoiUser,
};
