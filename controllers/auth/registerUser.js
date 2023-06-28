const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassw = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassw,
    avatarURL: "",
    activeBoard: "",
  });

  const { _id: id } = newUser;

  const payload = {
    id,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });

  await User.findByIdAndUpdate(id, { token });

  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
      theme: newUser.theme,
      avatarURL: newUser.avatarURL,
      activeBoard: newUser.activeBoard,
    },
  });
};

module.exports = registerUser;
