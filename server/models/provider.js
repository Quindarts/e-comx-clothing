const mongoose = required("mongoose");
const { Schema } = mongoose;
const ProviderSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    fax: {
        type: String
    },
    email: {
        type: String
    },
});

module.exports = mongoose.model("Provider", ProviderSchema);
