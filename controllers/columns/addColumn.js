const { Board, Column } = require("../../models");

const addColumn = async (req, res) => {
  // const { id: columnOwner } = req.params;
  // const result = await Column.create({ ...req.body, columnOwner });
  // res.status(201).json(result);

  const { id: columnOwner } = req.params;
  const board = await Board.findById(columnOwner);
  if (!board) {
    return res.status(404).json({ error: "Board not found" });
  }
  const column = new Column({ ...req.body, columnOwner });
  console.log("column =", column);
  await column.save();
  board.columns.push(column);
  await board.save();
  res.status(201).json(column);
};

module.exports = addColumn;
