const express = require("express");
const router = express.Router();

const {
    addProduct,
    getProducts,
    deleteProduct
} = require("../controllers/productController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// PUBLIC ROUTE (anyone can view products)
router.get("/", getProducts);

// ADMIN ONLY ROUTES
router.post("/", protect, adminOnly, addProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;