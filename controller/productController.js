const Product = require("../models/productSchema");

const fetcher = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            message: "Error fetching products: " + err.message
        });
    }
};

const create = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        imageUrl: req.body.imageUrl
    });

    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({
            message: "Error creating product: " + err.message
        });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({
            message: "Error updating product: " + err.message
        });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Deleted Product successfully!" });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting product: " + err.message
        });
    }
};

module.exports = {
    fetcher,
    create,
    update,
    remove
};
