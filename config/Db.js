const mongoose = require("mongoose");

const DbConnect = () => {
    return mongoose.connect("mongodb+srv://Abtopbook:bookstore1@cluster0.wscot8a.mongodb.net/?retryWrites=true&w=majority");
};

module.exports = DbConnect;
