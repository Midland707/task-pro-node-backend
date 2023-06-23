const { HttpError } = require("../../helpers");

const { User, signInSchema } = require("../../models");

// const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  // if (!user.verify) {
  //   throw HttpError(401, "Email is not verified yet");
  // }

  // const isCorrectPassword = await bcrypt.compare(password, user.password);
  // if (!isCorrectPassword) {
  //   throw HttpError(401, "Email or password is wrong");
  // }

  //  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" });
  const token = "token placeholder";

  //  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      theme: user.theme,
      avatarURL: user.avatarURL,
      name: user.name,
    },
  });
};

module.exports = loginUser;
