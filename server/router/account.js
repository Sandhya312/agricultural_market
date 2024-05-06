const express = require("express");
const router = express.Router();
const {
  test,
  createAccount,
  login,
  getCreditCount,
  purchaseCredits,
  paymentStatus,
} = require("../controller/account");

const { requireAuth } = require("../middleware/auth");

router.get('/test',test);
router.get("/paymentStatus/:id", paymentStatus);
router.get("/creditCount", requireAuth, getCreditCount);
router.post("/create", createAccount);
router.post("/login", login);
router.post("/purchase", requireAuth, purchaseCredits);


module.exports = router;
