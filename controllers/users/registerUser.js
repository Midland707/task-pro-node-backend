// const { User } = require("../../models");
// const { HttpError } = require("../../helpers");
// const bcrypt = require("bcrypt");
// var gravatar = require("gravatar");
// const { sendToEmail } = require("../../middlewares");

const registerUser = async (req, res) => {
  res.json("registerUser");
  //   const { email, password } = req.body;
  //   const avatarURL = gravatar.url(email, {
  //     protocol: "https",
  //     s: "100",
  //   });
  //   const user = await User.findOne({ email });
  //   if (user) {
  //     throw HttpError(409, "Email in use");
  //   }
  //   const hashPassw = await bcrypt.hash(password, 10);
  //   const verificationToken = await sendToEmail(email);
  //   const newUser = await User.create({
  //     ...req.body,
  //     password: hashPassw,
  //     avatarURL,
  //     verificationToken,
  //   });
  //   res.status(201).json({
  //     user: {
  //       email: newUser.email,
  //       subscription: newUser.subscription,
  //     },
  //   });
};

module.exports = registerUser;
