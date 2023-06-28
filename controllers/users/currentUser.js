const currentUser = async (req, res) => {
  const { email, name, theme, avatarURL, activeBoard, _id: id } = req.user;
  res.json({
    name,
    email,
    theme,
    avatarURL,
    activeBoard,
  });
};

module.exports = currentUser;
