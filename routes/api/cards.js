const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, cardsController.getCard);
router.post("/add", authenticate, cardsController.addCard);
router.patch("/:id", authenticate, cardsController.updateCard);
router.delete("/:id", authenticate, cardsController.removeCard);

module.exports = router;
