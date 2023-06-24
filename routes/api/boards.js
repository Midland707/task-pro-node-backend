const express = require("express");
const router = express.Router();
const boardsController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, boardsController.getBoard);
router.post("/add", authenticate, boardsController.addBoard);
router.patch("/:id", authenticate, boardsController.updateBoard);
router.delete("/:id", authenticate, boardsController.removeBoard);

module.exports = router;
