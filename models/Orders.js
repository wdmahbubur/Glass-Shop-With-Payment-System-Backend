const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
    {
        shippingAddress: {
            type: {},
            required: true
        },
        order: {
            type: [],
            required: true
        },
        status: {
            type: String,
            required: true
        },
        user: {
            type: {},
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("Orders", ordersSchema);
module.exports = token;