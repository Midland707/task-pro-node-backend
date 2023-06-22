const express = require("express");
const router = express.Router();
const boardsController = require("../../controllers");

router.get(
  "/get",
  // auth,
  boardsController.getBoard
);
router.post(
  "/add",
  // auth,
  boardsController.addBoard
);
router.patch(
  "/update",
  // auth,
  boardsController.updateBoard
);
router.delete(
  "/remove",
  // auth,
  boardsController.removeBoard
);

module.exports = router;
