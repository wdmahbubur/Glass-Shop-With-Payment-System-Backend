const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        basket: [],
        role: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const token = mongoose.model("Users", usersSchema);
module.exports = token;