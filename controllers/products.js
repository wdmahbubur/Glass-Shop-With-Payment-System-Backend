
const Products = require("../models/Products");

exports.addProducts = async (req, res) => {
    try {
        const product = req.body.product;
        const newProduct = new Products({
            name: product.name,
            brand: product.brand,
            price: product.price,
            maxQuantity: product.maxQuantity,
            description: product.description,
            sizes: product.size,
            image: product.image,
            isFeatured: product.isFeatured,
            isRecommended: product.isRecommended,
        });

        const savedProduct = await newProduct.save();

        if (!savedProduct)
            return res.status(400).json({ error: "Products Save failed" });

        res.status(201).json({
            product: savedProduct,
            message: "Products save successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

exports.getProducts = async (req, res) => {
    try {
        const query = req.query;
        const products = await Products.find(query).sort({ createdAt: -1 }).limit(parseInt(query.limit || 0));
        res.json(products);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const products = await Products.findById(id);
        res.json(products);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const products = await Products.findByIdAndDelete(id);
        res.json(products);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
