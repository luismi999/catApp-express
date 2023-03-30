const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION);
        console.log("MongoDB connected.")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    dbConnection
};