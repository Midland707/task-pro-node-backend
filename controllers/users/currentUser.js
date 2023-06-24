const currentUser = async (req, res) => {
  const { email, name, theme, avatarURL, _id: id } = req.user;
  res.json({
    id,
    name,
    email,
    avatarURL,
    theme,
  });
};

module.exports = currentUser;
