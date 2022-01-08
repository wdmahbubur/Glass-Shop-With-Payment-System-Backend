const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        maxQuantity: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        sizes: {
            type: [],
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        isRecommended: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("Products", productsSchema);
module.exports = token;