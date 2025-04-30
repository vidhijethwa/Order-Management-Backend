"use strict";

const orderRequest = {};
const orderSchema = require('../../schema/order.schema');

orderRequest.saveOrder = async (req, res) => {
  try {
    const payload = req.body
    console.log("payload", payload);

    const newOrder = new orderSchema(payload);
    console.log("newOrder", newOrder);

    await newOrder.save();

    return res.status(200).json({ message: 'Order saved successfully' });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ message: 'Internal server error' })
  }
};

orderRequest.fetchOrders = async (req, res) => {
  try {
    const orders = await orderSchema.find({})
    return res.status(200).json({ data: orders, message: 'Order fetched successfully' });
  } catch (e) {
    console.log(e);

    return res.status(200).json({ message: 'Internal server error' })
  }
};

module.exports = orderRequest;
