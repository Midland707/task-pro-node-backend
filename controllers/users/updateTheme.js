const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateTheme = async (req, res) => {
  const { _id } = req.user;
  const { theme } = req.body;

  const result = await User.findOneAndUpdate(_id, { theme });
  if (!result) throw HttpError(404);

  res.json({
    theme,
    message: `The theme has been changed. Now it's a ${theme} theme `,
  });
};

module.exports = updateTheme;
