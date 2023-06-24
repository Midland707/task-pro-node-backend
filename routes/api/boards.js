const express = require("express");
const router = express.Router();
const boardsController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/get", authenticate, boardsController.getBoard);
router.post("/add", authenticate, boardsController.addBoard);
router.patch("/update", authenticate, boardsController.updateBoard);
router.delete("/remove", authenticate, boardsController.removeBoard);

module.exports = router;
