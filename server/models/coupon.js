const mongoose = require("mongoose");
const { Schema } = mongoose;

const CouponSchema = new Schema({
    code: {
        type: String
    },
    discount: {
        type: Number
    },
    startDate: {
        default: Date.now,
        type: Date
    },
    endDate: {
        type: Date
    },
    available: {
        type: Number
    },
    status: {
        type: String
    },
})
module.exports = mongoose.model('Coupon', CouponSchema);