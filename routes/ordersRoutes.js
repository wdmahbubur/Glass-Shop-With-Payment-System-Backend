const express = require("express");
const router = express.Router();

const {
    createPaymentIntent,
    saveOrder,
    getOrders,
    getMyOrders,
    deleteOrder,
    updateOrderStatus
} = require("../controllers/orders");

router.post("/create-payment-intent", createPaymentIntent);
router.post("/orders", saveOrder);
router.put("/orders/:id", updateOrderStatus);
router.get("/orders", getOrders);
router.get("/orders/:id", getMyOrders);
router.delete("/orders/:id", deleteOrder);


module.exports = router;
