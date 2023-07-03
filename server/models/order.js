const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    products: Schema.Types.Array,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    coupon: {
        type: Schema.Types.ObjectId
    },
    userId: {
        type: SChema.Types.ObjectId
    },
    shippingDetail: {
        type: Schema.Types.ObjectId
    },
});
module.exports = mongoose.model("Order", OrderSchema);
