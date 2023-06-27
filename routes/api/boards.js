const express = require("express");
const router = express.Router();
const boardsController = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { addBoardSchema, updateBoardSchema } = require("../../schemas");

router.get("/", authenticate, boardsController.getBoard);
router.post(
  "/:id",
  authenticate,
  validateBody(addBoardSchema),
  boardsController.addBoard
);
router.patch(
  "/:id",
  authenticate,
  validateBody(updateBoardSchema),
  boardsController.updateBoard
);
router.delete("/:id", authenticate, boardsController.removeBoard);

module.exports = router;
