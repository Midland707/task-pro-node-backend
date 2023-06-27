const express = require("express");
const router = express.Router();
const columnController = require("../../controllers");
const { authenticate,validateBody } = require("../../middlewares");
const {addColumnSchema,updateColumnSchema} = require("../../schemas")

router.get("/", authenticate, columnController.getColumn);
router.post("/add", authenticate,validateBody(addColumnSchema), columnController.addColumn);
router.patch("/:id", authenticate,validateBody(updateColumnSchema), columnController.updateColumn);
router.delete("/:id", authenticate, columnController.removeColumn);

module.exports = router;
