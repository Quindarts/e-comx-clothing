const mongoose = require("mongoose");
const { SChema } = mongoose;

const ReviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId
    },
    product: {
        type: Schema.Types.ObjectId
    },
    content: {
        type: String
    },
    dateCreated: {
        type: Date
    },
    score: {
        type: Number
    },
});
module.exports = mongoose.model("Review", ReviewSchema);
