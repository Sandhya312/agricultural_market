const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/auth");
const {
  addProductToCart,
  getCartData,
  editProductQuantity,
  purchaseCart,
} = require("../controller/cart");

router.post("/addProduct", requireAuth, addProductToCart);
router.get("/getCartData", requireAuth, getCartData);
router.patch("/editProductQuantity", requireAuth, editProductQuantity);
router.post("/purchaseCart", requireAuth, purchaseCart);

module.exports = router;
