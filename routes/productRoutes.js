const express = require("express");
const router = express.Router();
const Product = require("../db_models/Product.js/db_models/Product");

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();

        res.json({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;