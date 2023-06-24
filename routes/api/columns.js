const express = require("express");
const router = express.Router();
const columnController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, columnController.getColumn);
router.post("/add", authenticate, columnController.addColumn);
router.patch("/:id", authenticate, columnController.updateColumn);
router.delete("/:id", authenticate, columnController.removeColumn);

module.exports = router;
