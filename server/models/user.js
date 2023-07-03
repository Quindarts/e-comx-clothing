const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    avatar: {
        type: String
    },
    role: {
        type: String
    },
    status: {
        type: String
    },
    coupond: Schema.Types.Array,
});
module.exports = mongoose.model("User", UserSchema);
