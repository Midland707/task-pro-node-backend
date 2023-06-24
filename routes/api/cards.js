const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/get", authenticate, cardsController.getCard);
router.post("/add", authenticate, cardsController.addCard);
router.patch("/update", authenticate, cardsController.updateCard);
router.delete("/remove", authenticate, cardsController.removeCard);

module.exports = router;
