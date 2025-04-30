"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./order.controller");

router.post("/placeOrder", controller.saveOrder);
router.get("/fetchOrder", controller.fetchOrders);

module.exports = router;
