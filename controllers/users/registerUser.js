const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");

// var gravatar = require("gravatar");
// const { sendToEmail } = require("../../middlewares");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  //   const avatarURL = gravatar.url(email, {
  //     protocol: "https",
  //     s: "100",
  //   });
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassw = await bcrypt.hash(password, 10);
  //   const verificationToken = await sendToEmail(email);
  const verificationToken = nanoid();

  avatarURL = "";
  const newUser = await User.create({
    ...req.body,
    avatarURL: "placeholder",
    password: hashPassw,
    avatarURL,
    verificationToken,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      theme: newUser.theme,
      name: newUser.name,
      avatarURL: newUser.avatarURL,
    },
  });
};

module.exports = registerUser;
