const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    author: {
        type: String,
    },
    commentTitle: {
        type: String
    },
    content: {
        type: String
    },
    dateCreated: {
        type: Date
    },
    reply: {
        type: Schema.Types.ObjectId
    },
});
module.exports = mongoose.model("Comment", CommentSchema);
