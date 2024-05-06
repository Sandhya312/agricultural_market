const express = require("express");
const router = express.Router();

const { initProducts, getAllProducts } = require("../controller/products");

router.get("/init", initProducts);
router.get("/allProducts", getAllProducts);


module.exports = router;
