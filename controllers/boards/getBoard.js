const {Board}=require('../../models')

const getBoard = async (req, res) => {
 const {_id: owner } = req.user;
 const result = Board.find({owner})
res.status(201).json(result)
};

module.exports = getBoard;
