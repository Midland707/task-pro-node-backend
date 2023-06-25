const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const { _id: id, email } = req.user;
  const { email: newEmail, name: newName, password: newPassword } = req.body;

  const isEmailInUse = await User.findOne({ email: newEmail });
  if (email !== newEmail && isEmailInUse)
    throw HttpError(409, "Please, choose another email");

  const userNewData = {
    email: newEmail,
    name: newName,
  };

  if (newPassword) {
    userNewData.password = await bcrypt.hash(newPassword, 10);
  }

  if (req.file) {
    userNewData.avatarURL = req.file.path;
  }

  const result = await User.findOneAndUpdate(id, userNewData, {
    new: true,
  });
  if (!result) throw HttpError(404);

  res.json({
    email: result.email,
    name: result.name,
    avatarURL: result.avatarURL,
  });
};

module.exports = updateUser;
