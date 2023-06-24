const express = require("express");
const router = express.Router();
const columnController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/get", authenticate, columnController.getColumn);
router.post("/add", authenticate, columnController.addColumn);
router.patch("/update", authenticate, columnController.updateColumn);
router.delete("/remove", authenticate, columnController.removeColumn);

module.exports = router;
