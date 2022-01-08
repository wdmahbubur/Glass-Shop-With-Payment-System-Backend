const Users = require("../models/Users");

exports.updateUser = async (req, res) => {
    try {
        const query = { uid: req.body.user.uid };
        const user = {
            uid: req.body.user.uid,
            name: req.body.user.name,
            email: req.body.user.email,
            basket: req.body.user.basket,
            role: "USER"
        };

        const options = { upsert: true, timestamps: true }

        const saveUser = await Users.findOneAndUpdate(query, user, options);
        res.status(201).json({
            user: saveUser,
            message: "New User Add Successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.getUser = async (req, res) => {
    try {
        const query = { uid: req.params.id };
        const user = await Users.find(query);
        res.json(user);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const user = await Users.find({});
        res.json(user);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}