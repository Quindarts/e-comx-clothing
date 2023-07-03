const { database } = require('./keys');
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(`${database.url}`, {
            useNewUrlParser: true,
        })
        console.log("🚀CONNECTED DATABASE:", database.url);

    } catch (error) {
        console.log("Connect Failed !!");
    }
}
module.exports = { connect }