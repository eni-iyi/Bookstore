const mongoose = require("mongoose");

const DbConnect = () => {
    return mongoose.connect(process.env.MONGO_URI);
};

module.exports = DbConnect;
