const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateActiveBoard = async (req, res) => {
  const { _id } = req.user;
  const { activeBoard } = req.body;
  const result = await User.findOneAndUpdate(_id, { activeBoard });
  if (!result) throw HttpError(404);
  res.json({
    activeBoard,
    message: "Active board set to user.",
  });
  //   res.json("updateActiveBoard");
};

module.exports = updateActiveBoard;
