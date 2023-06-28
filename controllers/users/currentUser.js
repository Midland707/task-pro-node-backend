const currentUser = async (req, res) => {
  const { email, name, theme, avatarURL, _id: id } = req.user;
  res.json({
    name,
    email,
    avatarURL,
    theme,
  });
};

module.exports = currentUser;
