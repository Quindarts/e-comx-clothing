const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    available: {
        type: Number,
    },
    description: {
        type: String,
    },
    tags: {
        type: Schema.Types.Array,
    },
    trademark: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
    },
    provider: {
        type: Schema.Types.ObjectId,    
    },
    totalReview: {
        type: Number,
    },
});
module.exports = mongoose.model('Product',ProductSchema);