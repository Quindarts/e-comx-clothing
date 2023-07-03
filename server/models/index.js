//Set up default mongoose connection
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;