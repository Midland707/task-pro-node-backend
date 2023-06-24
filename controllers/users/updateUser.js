const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcrypt");

const updateUser = async (req, res) => {
  const { avatarURL, _id: id } = req.user;
  const { email: newEmail, name: newName, password: newPassword } = req.body;
  // const {avatar}= req.file

  // const isMatchPasswords = await bcrypt.compare(newPassword, password);
  // if (isMatchPasswords) {
  //   throw HttpError(400, "New password can't be ");
  // }

  const userNewData = {
    email: newEmail,
    name: newName,
  };

  if (newPassword) {
    userNewData.password = await bcrypt.hash(newPassword, 10);
  }

  const result = await User.findOneAndUpdate(id, userNewData, {
    new: true,
  });
  if (!result) throw HttpError(404);

  res.json({
    email: result.email,
    name: result.name,
  });
};

module.exports = updateUser;
