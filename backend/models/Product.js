const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: String},
        categories: { type: Array, required: true },
        size: { type: String},
        price: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);