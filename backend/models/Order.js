const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        product: [
            {
                productId: { type: String, required: true },
                duration: { type: Number, default: 1, required: true},
            }
        ],
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: { type: String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);