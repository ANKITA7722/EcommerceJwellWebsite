
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    image: String,
    collection:String

})

module.exports = mongoose.model("product", productSchema);