const Product = require("../db_models/Product");

// ADD PRODUCT (ADMIN)
const addProduct = async (req, res) => {
    try {
        const { name, price, description, image, category, stock } = req.body;

        const product = await Product.create({
            name,
            price,
            description,
            image,
            category,
            stock
        });

        res.status(201).json({
            message: "Product created successfully",
            product
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE PRODUCT (ADMIN)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await product.deleteOne();

        res.json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addProduct,
    getProducts,
    deleteProduct
};