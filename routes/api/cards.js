const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers");
const { authenticate, validateBody } = require("../../middlewares");
const { addCardSchema, updateCardSchema } = require("../../schemas");

router.get("/:id", authenticate, cardsController.getCard);
router.post(
  "/:id",
  authenticate,
  validateBody(addCardSchema),
  cardsController.addCard
);
router.patch(
  "/:id",
  authenticate,
  validateBody(updateCardSchema),
  cardsController.updateCard
);
router.delete("/:id", authenticate, cardsController.removeCard);

module.exports = router;
