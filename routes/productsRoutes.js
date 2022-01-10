const express = require("express");
const router = express.Router();

const {
    addProducts,
    getProducts,
    getProduct,
    deleteProducts
} = require("../controllers/products");

router.post("/products", addProducts);
router.get("/products/:id", getProduct);
router.get("/products/", getProducts);
router.delete("/products/:id", deleteProducts);

module.exports = router;
