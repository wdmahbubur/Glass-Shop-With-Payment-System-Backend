const stripe = require("stripe")(process.env.STRIPE_SECRET)
const Orders = require("../models/Orders");

exports.createPaymentIntent = async (req, res) => {
    const getAmount = req.body.amount;
    const totalAmount = parseInt(getAmount) * 100;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: "usd",
        payment_method_types: ["card"]
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}

exports.saveOrder = async (req, res) => {
    try {
        const orderInfo = req.body.orderInfo;
        const newOrder = new Orders({
            shippingAddress: orderInfo.shippingAddress,
            order: orderInfo.products,
            status: "Pending",
            user: orderInfo.user
        });

        const savedOrder = await newOrder.save();

        if (!savedOrder)
            return res.status(400).json({ error: "Order Save failed" });

        res.status(201).json({
            product: savedOrder,
            message: "Order save successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

exports.getOrders = async (req, res) => {
    try {
        const query = req.query;
        const orders = await Orders.find(query).sort({ createdAt: -1 }).limit(parseInt(query.limit));
        res.json(orders);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.getMyOrders = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { "user.uid": id }
        const orders = await Orders.find(query);
        res.json(orders);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await Orders.findByIdAndDelete(id);
        res.json(order);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}


exports.updateOrderStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const update = { status: req.body.status };
        const order = await Orders.findByIdAndUpdate(id, update);
        res.json(order);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}