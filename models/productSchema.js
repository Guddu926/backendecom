const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true, trim: true },
    dateAdded: { type: Date, default: Date.now }
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;