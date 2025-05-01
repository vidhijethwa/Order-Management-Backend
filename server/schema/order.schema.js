const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
      orderType: { type: String, required: true },
      quantity: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema, 'orders');
