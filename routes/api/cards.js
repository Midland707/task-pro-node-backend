const express = require("express");
const router = express.Router();
const cardsController = require("../../controllers");

router.get(
  "/get",
  // auth,
  cardsController.getCard
);
router.post(
  "/add",
  // auth,
  cardsController.addCard
);
router.patch(
  "/update",
  // auth,
  cardsController.updateCard
);
router.delete(
  "/remove",
  // auth,
  cardsController.removeCard
);

module.exports = router;
