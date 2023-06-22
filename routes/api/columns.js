const express = require("express");
const router = express.Router();
const columnController = require("../../controllers");

router.get(
  "/get",
  // auth,
  columnController.getColumn
);
router.post(
  "/add",
  // auth,
  columnController.addColumn
);
router.patch(
  "/update",
  // auth,
  columnController.updateColumn
);
router.delete(
  "/remove",
  // auth,
  columnController.removeColumn
);

module.exports = router;
